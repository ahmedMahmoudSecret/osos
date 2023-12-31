import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`

.rounded, .rounded-full, .rounded-md, .rounded-lg, .rounded-xl, .rounded-t-3xl  {
  border-radius:${(props) => !props.borderRound && '0!important'}
}

.rtl\:rounded-tl-xl{
  border-radius:${(props) => !props.borderRound && '0!important'}
}

.fullRound{
  border-radius: 50%!important;
}
 
 
  body {
    background-color: ${(props) =>
      props.currentMode !== 'dark' ? 'white' : 'black'}; 
      overflow-x: hidden;
      min-height: 100vh;
   }

   *{
     margin:0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    letter-spacing:-0.2px
    /* color: ${(props) =>
      props.currentMode == 'dark' ? 'white' : 'black'}; */
 }

 
:root{
  font-size: 16px;
    --primary-950:${(props) =>
      props.currentMode !== 'dark' ? '#102a56' : '#EFF8FF'};
    --primary-600:${(props) =>
      props.currentMode !== 'dark' ? '#1570EF' : '#072d61'};
    --primary-800:${(props) =>
      props.currentMode !== 'dark' ? '#1849A9' : '#b2ddff'};
    --primary-700:${(props) =>
      props.currentMode !== 'dark' ? '#175CD3' : '#072d61'};
    --primary-500:${(props) =>
      props.currentMode !== 'dark' ? '#2E90FA' : '#072d61'};
    --primary-400:${(props) =>
      props.currentMode !== 'dark' ? '#53B1FD' : '#072d61'};
    --primary-300: ${(props) =>
      props.currentMode !== 'dark' ? '#84CAFF' : '#00589b'}; 
    --primary-200: ${(props) =>
      props.currentMode !== 'dark' ? '#b2ddff' : '#0061ad'}; 
    --primary-100: ${(props) =>
      props.currentMode !== 'dark' ? '#D1E9FF' : '#0061ad'}; 
    --primary-50: ${(props) =>
      props.currentMode !== 'dark' ? '#EFF8FF' : '#006fc6'}; 
    --primary-25: ${(props) =>
      props.currentMode !== 'dark' ? '#F5FAFF' : '#006fc6'}; 

    --themeGray-900:${(props) =>
      props.currentMode !== 'dark' ? '#101828' : '#8fa6c6'}; 
    --themeGray-800:${(props) =>
      props.currentMode !== 'dark' ? '#1d2939' : '#8fa6c6'}; 
    --themeGray-700:${(props) =>
      props.currentMode !== 'dark' ? '#344054' : '#8fa6c6'}; 
    --themeGray-500:${(props) =>
      props.currentMode !== 'dark' ? '#6b7280' : '#c3c6cd'}; 
    --themeGray-600:${(props) =>
      props.currentMode !== 'dark' ? '#475467' : '#c3c6cd'}; 
    --themeGray-400: ${(props) =>
      props.currentMode !== 'dark' ? '#98A2B3' : '#4b5360'}; 
    --themeGray-300: ${(props) =>
      props.currentMode !== 'dark' ? '#d1d5db' : '#4b5360'}; 
    --themeGray-200: ${(props) =>
      props.currentMode !== 'dark' ? '#EAECF0' : '#515969'}; 
    --themeGray-100: ${(props) =>
      props.currentMode !== 'dark' ? '#f3f4f6' : '#545d70'}; 
    --themeGray-50: ${(props) =>
      props.currentMode !== 'dark' ? '#f9fafb' : '#506478'}; 
    --success-500: ${(props) =>
      props.currentMode !== 'dark' ? '#17b16a' : '#09472a'}; 
    --themeWhite-white: ${(props) =>
      props.currentMode !== 'dark' ? '#fff' : '#000'}; 
    --themeBlack-black: ${(props) =>
      props.currentMode !== 'dark' ? '#000' : '#fff'}; 

    --error-700: ${(props) =>
      props.currentMode !== 'dark' ? '#B42318' : '#facac7'}; 
    --error-400: ${(props) =>
      props.currentMode !== 'dark' ? '#F97066' : '#B42318'}; 
    --error-200: ${(props) =>
      props.currentMode !== 'dark' ? '#facac7' : '#B42318'}; 
    --error-100: ${(props) =>
      props.currentMode !== 'dark' ? '#fee4e2' : '#B42318'}; 
    --error-50: ${(props) =>
      props.currentMode !== 'dark' ? '#fef3f2' : '#B42318'}; 
    --error-25: ${(props) =>
      props.currentMode !== 'dark' ? '#FFFBFA' : '#B42318'}; 

    --themeGreen-800: ${(props) =>
      props.currentMode !== 'dark' ? '#326212' : '#83cfc6'}; 
    --themeGreen-700: ${(props) =>
      props.currentMode !== 'dark' ? '#067647' : '#83cfc6'}; 
    --themeGreen-600: ${(props) =>
      props.currentMode !== 'dark' ? '#0E9384' : '#83cfc6'}; 
    --themeGreen-500: ${(props) =>
      props.currentMode !== 'dark' ? '#17B26A' : '#83cfc6'}; 
    --themeGreen-400: ${(props) =>
      props.currentMode !== 'dark' ? '#3CCB7F' : '#83cfc6'}; 
    --themeGreen-200: ${(props) =>
      props.currentMode !== 'dark' ? '#ABEFC6' : '#0E9384'}; 
    --themeGreen-50: ${(props) =>
      props.currentMode !== 'dark' ? '#ECFDF3' : '#326212'}; 
      
    --themeOrange-500: ${(props) =>
      props.currentMode !== 'dark' ? '#EF6820' : '#e9b046'}; 
}




img{
    max-width: 100%;
}

button:focus-visible {
    outline: 0.13rem solid var(--primary-100);
}
 
 /* width */
::-webkit-scrollbar {
  width: 0.3rem;
}


/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--themeGray-800); 
   border-radius: ${(props) => (props.borderRound ? '0.62rem' : '0!important')};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--themeGray-800); 
}


 
`

export default GlobalStyle
