import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const CategDropdown = ({categories,selCateg,setSelCateg}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className='categMenu' caret>
			{selCateg ? selCateg : "Category"}
		</DropdownToggle>
        <DropdownMenu className='categMenuDrop' >
			{categories ? categories.map(obj=>
          		<DropdownItem className='categMenuSelect' key={obj.name}
				onClick={()=>setSelCateg(obj.name)}
				>
					{obj.name}
				</DropdownItem>

			)
			:
			<DropdownItem disabled>No category available</DropdownItem>
		}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}