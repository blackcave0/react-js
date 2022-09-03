import React from 'react'
// import "../node_modules/jquery/dist/jquery.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/js/src/collapse.js'
import UseParamHooks from './UseParamsHooks/UseParamHooks'
import { BrowserRouter } from "react-router-dom"
import RouterApp from './ReactRouter/RouterApp'
import ParamsApp from './UseParamsHooks/ParamsApp'
// import SearchApp from './SearchFilter/SearchApp'

// import RouterApp from './ReactRouter/RouterApp';
// import MainApi from './Api/MainApi';
// import AxiosApiApp from './React_AxiosApi/AxiosApi_App';
// import Hook from './challenges/Hook';
// import UseContextApp from './ContextApi/UseContext/UseContextApp';
// import UseEffectApp from './UseEffect/UseEffectApp';
// import ContextApp from './CreateContext/ContextApp';
// import KeepApp from './GooglKeep/KeepApp';
// import MainApp from './Project/MainApp';
// import AccordionApp from './AccordionApp/AccordionApp';

// import Bootstrap from './Bootstrap/Bootstrap';
// import MaterialUiApp from './MaterialUi/MaterialUiApp';
// import C40TodoApp from './TodoApp/C40_TodoApp';
// import '../props/card.css'
// import './style.css'
// import C33EventApp from './Events/C33_EventApp';
// import C34FormApp from './Form/C34_FormApp';
// import C30hooksApp from './Hooks/C30_hooksApp';
// import ConditionalApp from './conditionalStmnt/ConditionalApp';
// import ItemSearch from './props/ItemSearch';
// import SlotApp from './slotMachine/SlotApp';
// import PropsApp from './props/PropsApp';
// import '../src/css_style/index.css'
// import StyleApp from './css_style/styleApp';
// import ChallengeApp from './challenges/challengApp';
// import ComponentApp from './components/componentApp';



const App = () => {
    return (
        <>
            {/* <h1 className="heading_styl">{props.headName}</h1> */}
            {/* <StyleApp/>   */}
            {/* <ChallengeApp/> */}
            {/* <ComponentApp/> */}
            {/* <PropsApp/> */}
            {/* <ConditionalApp/> */}
            {/* <SlotApp/> */}
            {/* <C30hooksApp/> */}
            {/* <C33EventApp /> */}
            {/* <C34FormApp/> */}
            {/* <ItemSearch/> */}
            {/* <C40TodoApp/> */}
            {/* <MaterialUiApp/> */}
            {/* <Bootstrap/> */}
            {/* <AccordionApp /> */}
            {/* <MainApp/> */}
            {/* <KeepApp/> */}
            {/* <ContextApp/> */}
            {/* <UseContextApp/> */}
            {/* <UseEffectApp/> */}

            {/* CHALLENGE */}
            {/* <Hook/> */}

            {/* <AxiosApiApp/> */}


            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>

            {/* project for api testing  */}
            {/* <MainApi/> */}

            {/* <BrowserRouter>
                <ParamsApp/>
            </BrowserRouter> */}

            {/* <SearchApp/> */}
        </>
    )
}
export default App;