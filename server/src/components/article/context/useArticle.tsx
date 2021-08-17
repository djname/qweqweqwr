// hooks/useUserFlowData.js

import { useContext } from "react";
import { Context } from "./Context";

const useArcitle = () => {
    const [articleList, setArticleList, visible, setVisible, currItem, setCurrItem] = useContext<any>(Context); // Our values from Context
    // 返回你需要的部分数据在组件中使用
    return {
        articleList,
        setArticleList,
        visible,
        setVisible,
        currItem, 
        setCurrItem
    };
};

export default useArcitle;