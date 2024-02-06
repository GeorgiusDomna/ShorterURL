import { useEffect, useState } from "react"

import { getStatistics } from "../api/shorterService";
import { IshortURL } from "../interfaces/IshortURL";
import { SortType } from "../interfaces/types";

import Shorter from "./Shorter";
import Filter from "./Filter";
import Table from "./Table";
import Pagination from "./Pagination";

const Content = () => {
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
  
  
  return (
    <div className="content">
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
