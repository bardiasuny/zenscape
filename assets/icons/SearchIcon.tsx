import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SearchIcon = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M19 19l-5.197-5.197m0 0A7.5 7.5 0 103.196 3.196a7.5 7.5 0 0010.607 10.607z"
            stroke="#AEA8BC"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default SearchIcon;
