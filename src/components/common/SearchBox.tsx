import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { CSSProperties, useState } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';

export interface SearchBoxProps extends FormControlProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  formClassName?: string;
  size?: 'sm' | 'lg';
  style?: CSSProperties;
}

const SearchBox = ({
  placeholder = 'Search',
  size,
  className,
  inputClassName,
  formClassName,
  style,
  ...rest
}: SearchBoxProps) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSearchBox = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    
    <div className={classNames('search-box', className)} style={{ ...style }}>
      <form className={classNames('position-relative', formClassName)}>
        <Form.Control
          type="search"
          placeholder={placeholder}
          className={classNames('search-input search', inputClassName)}
          size={size}
          onFocus={toggleSearchBox}
          onBlur={toggleSearchBox}
          {...rest}
        />
        <FontAwesomeIcon icon={faSearch} className="search-box-icon" />
      </form>
      {isExpanded && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 1000, backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', maxHeight: '200px', overflowY: 'auto' }}>
          <div style={{ padding: '10px', borderBottom: '1px solid #eee' }} className="search-result">Search Result 1</div>
          <div style={{ padding: '10px', borderBottom: '1px solid #eee' }} className="search-result">Search Result 2</div>
          <div style={{ padding: '10px', borderBottom: '1px solid #eee' }} className="search-result">Search Result 3</div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
