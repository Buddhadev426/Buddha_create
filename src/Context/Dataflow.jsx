import { tr } from 'framer-motion/client';
import React, {createContext, useContext, useState} from 'react';
const DataFlowContext = createContext();


export const useDataFlowContext = () => useContext(DataFlowContext);
function DataFlowProvider({children}) {
    let firstName = 'buddhadev maity';
    const [darkMode, setDarkMode] = useState(true);



    const data = {
        firstName,
        darkMode,
        setDarkMode,
    };
    return (
        <DataFlowContext.Provider value={data}>
            {children}
        </DataFlowContext.Provider>
    );
}

export default DataFlowProvider