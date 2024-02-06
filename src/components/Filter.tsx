import { FormEvent } from "react";
import { SortType } from "../interfaces/types";

interface IFilterProps {
  setSortType: (arg1: SortType[]) => void;
}

const Filter: React.FC<IFilterProps> = ({setSortType}) => {

  const hundelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const selectedValues: string[] = [].filter
    .call(e.currentTarget.options, (option: HTMLOptionElement) => option.selected)
    .map((option: HTMLOptionElement) => option.value);
      
    setSortType(selectedValues as SortType[]);
    e.currentTarget.blur();
  }
  
  return (
    <div className="filter">
      <form onSubmit={hundelSubmit}>
        <select multiple id="options" name="options" defaultValue={['desc_counter']}>
          <option value="asc_short">asc short</option>
          <option value="asc_target">asc target</option>
          <option value="asc_counter">asc counter</option>
          <option value="desc_short">desc short</option>
          <option value="desc_target">desc target</option>
          <option value="desc_counter">desc counter</option>
        </select>
        <button type="submit">Filter</button>
      </form>
    </div>
  )
}

export default Filter
