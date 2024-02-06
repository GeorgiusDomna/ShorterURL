import { useEffect, useState } from "react"

import { getStatistics } from "../api/shorterService";
import { IshortURL } from "../interfaces/IshortURL";
import { SortType } from "../interfaces/types";

import Shorter from "./Shorter";
import Filter from "./Filter";
import Table from "./Table";
import Pagination from "./Pagination";

interface IContentProps {
  toggleIsAuth: () => void;
}

const Content: React.FC<IContentProps> = ({toggleIsAuth}) => {
  const [shorterList, setShorterList] = useState<IshortURL[] | []>([]);
  const [sortType, setSortType] = useState<SortType[]>(['desc_counter']);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await getStatistics(sortType, currentPage, 10);
      if (res) setShorterList(res.data), setTotalPage(res.totalCount);
    })();
  }, [currentPage, sortType]);

  const logOut = () => {
    toggleIsAuth();
    localStorage.removeItem('token');
  }
  
  return (
    <div className="content">
      <span className="logOut" onClick={logOut}>Log out</span>
      <Shorter />
      <Filter setSortType={setSortType} />
      <Table shorterList={shorterList} />
      <Pagination
        сurrent={currentPage}
        total={totalPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default Content
