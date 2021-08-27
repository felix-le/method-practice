import { useState } from 'react';
// import { SEARCH_DATA } from '../../../../data/searchData';
import { Search as SearchIcon, XCircle as XIcon } from 'react-feather';
// import { toast } from 'react-toastify';
import ToolTip from 'src/components/ToolTips';

import RightBar from 'src/components/RightBar';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ToolTip info='testsss'>
        <SearchIcon onClick={handleOpen} />
      </ToolTip>
      <div id='rightBar'></div>
      {isOpen && (
        <RightBar isOpen={isOpen} setIsOpen={setIsOpen} idDom='rightBar'>
          <h1>Hello</h1>
        </RightBar>
      )}
    </>
  );
};

export default Search;
