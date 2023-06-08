"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[8733,6678],{"./packages/components/src/h-stack/hook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useHStack});var use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/flex/flex-item/component.tsx"),hook=__webpack_require__("./packages/components/src/flex/flex/hook.ts"),values=__webpack_require__("./packages/components/src/utils/values.js");const H_ALIGNMENTS={bottom:{align:"flex-end",justify:"center"},bottomLeft:{align:"flex-end",justify:"flex-start"},bottomRight:{align:"flex-end",justify:"flex-end"},center:{align:"center",justify:"center"},edge:{align:"center",justify:"space-between"},left:{align:"center",justify:"flex-start"},right:{align:"center",justify:"flex-end"},stretch:{align:"stretch"},top:{align:"flex-start",justify:"center"},topLeft:{align:"flex-start",justify:"flex-start"},topRight:{align:"flex-start",justify:"flex-end"}},V_ALIGNMENTS={bottom:{justify:"flex-end",align:"center"},bottomLeft:{justify:"flex-end",align:"flex-start"},bottomRight:{justify:"flex-end",align:"flex-end"},center:{justify:"center",align:"center"},edge:{justify:"space-between",align:"center"},left:{justify:"center",align:"flex-start"},right:{justify:"center",align:"flex-end"},stretch:{align:"stretch"},top:{justify:"flex-start",align:"center"},topLeft:{justify:"flex-start",align:"flex-start"},topRight:{justify:"flex-start",align:"flex-end"}};var get_valid_children=__webpack_require__("./packages/components/src/ui/utils/get-valid-children.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function useHStack(props){const{alignment="edge",children,direction,spacing=2,...otherProps}=(0,use_context_system.y)(props,"HStack"),align=function getAlignmentProps(alignment,direction="row"){if(!(0,values.Jf)(alignment))return{};const props="column"===direction?V_ALIGNMENTS:H_ALIGNMENTS;return alignment in props?props[alignment]:{align:alignment}}(alignment,direction),propsForFlex={children:(0,get_valid_children.W)(children).map(((child,index)=>{if((0,context_connect.H)(child,["Spacer"])){const childElement=child,_key=childElement.key||`hstack-${index}`;return(0,jsx_runtime.jsx)(component.Z,{isBlock:!0,...childElement.props},_key)}return child})),direction,justify:"center",...align,...otherProps,gap:spacing};return(0,hook.k)(propsForFlex)}try{useHStack.displayName="useHStack",useHStack.__docgenInfo={description:"",displayName:"useHStack",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"'edge'"},description:"Determines how the child elements are aligned.\n\n* `top`: Aligns content to the top.\n* `topLeft`: Aligns content to the top/left.\n* `topRight`: Aligns content to the top/right.\n* `left`: Aligns content to the left.\n* `center`: Aligns content to the center.\n* `right`: Aligns content to the right.\n* `bottom`: Aligns content to the bottom.\n* `bottomLeft`: Aligns content to the bottom/left.\n* `bottomRight`: Aligns content to the bottom/right.\n* `edge`: Justifies content to be evenly spread out up to the main axis edges of the container.\n* `stretch`: Stretches content to the cross axis edges of the container.",name:"alignment",required:!1,type:{name:'(string & {}) | "baseline" | "inherit" | "initial" | "left" | "center" | "right" | "end" | "top" | "bottom" | "start" | "-moz-initial" | "revert" | "unset" | "edge" | "stretch" | ... 8 more ... | "self-start"'}},spacing:{defaultValue:{value:"2"},description:"The amount of space between each child element. Spacing in between each child can be adjusted by using `spacing`.\nThe value of `spacing` works as a multiplier to the library's grid system (base of `4px`).",name:"spacing",required:!1,type:{name:"Width<string | number>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/h-stack/hook.tsx#useHStack"]={docgenInfo:useHStack.__docgenInfo,name:"useHStack",path:"packages/components/src/h-stack/hook.tsx#useHStack"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>icon});var react=__webpack_require__("./node_modules/react/index.js"),svg=__webpack_require__("./packages/primitives/build-module/svg/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Dashicon({icon,className,size=20,style={},...extraProps}){const iconClass=["dashicon","dashicons","dashicons-"+icon,className].filter(Boolean).join(" "),styles={...20!=size?{fontSize:`${size}px`,width:`${size}px`,height:`${size}px`}:{},...style};return(0,jsx_runtime.jsx)("span",{className:iconClass,style:styles,...extraProps})}Dashicon.displayName="Dashicon";const dashicon=Dashicon;try{Dashicon.displayName="Dashicon",Dashicon.__docgenInfo={description:"",displayName:"Dashicon",props:{icon:{defaultValue:null,description:"The icon name",name:"icon",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"html"'},{value:'"menu"'},{value:'"filter"'},{value:'"marker"'},{value:'"text"'},{value:'"hidden"'},{value:'"id"'},{value:'"search"'},{value:'"email"'},{value:'"heading"'},{value:'"no"'},{value:'"yes"'},{value:'"ellipsis"'},{value:'"visibility"'},{value:'"exit"'},{value:'"layout"'},{value:'"admin-appearance"'},{value:'"admin-collapse"'},{value:'"admin-comments"'},{value:'"admin-customizer"'},{value:'"admin-generic"'},{value:'"admin-home"'},{value:'"admin-links"'},{value:'"admin-media"'},{value:'"admin-multisite"'},{value:'"admin-network"'},{value:'"admin-page"'},{value:'"admin-plugins"'},{value:'"admin-post"'},{value:'"admin-settings"'},{value:'"admin-site-alt"'},{value:'"admin-site-alt2"'},{value:'"admin-site-alt3"'},{value:'"admin-site"'},{value:'"admin-tools"'},{value:'"admin-users"'},{value:'"airplane"'},{value:'"album"'},{value:'"align-center"'},{value:'"align-full-width"'},{value:'"align-left"'},{value:'"align-none"'},{value:'"align-pull-left"'},{value:'"align-pull-right"'},{value:'"align-right"'},{value:'"align-wide"'},{value:'"amazon"'},{value:'"analytics"'},{value:'"archive"'},{value:'"arrow-down-alt"'},{value:'"arrow-down-alt2"'},{value:'"arrow-down"'},{value:'"arrow-left-alt"'},{value:'"arrow-left-alt2"'},{value:'"arrow-left"'},{value:'"arrow-right-alt"'},{value:'"arrow-right-alt2"'},{value:'"arrow-right"'},{value:'"arrow-up-alt"'},{value:'"arrow-up-alt2"'},{value:'"arrow-up"'},{value:'"arrow-up-duplicate"'},{value:'"art"'},{value:'"awards"'},{value:'"backup"'},{value:'"bank"'},{value:'"beer"'},{value:'"bell"'},{value:'"block-default"'},{value:'"book-alt"'},{value:'"book"'},{value:'"buddicons-activity"'},{value:'"buddicons-bbpress-logo"'},{value:'"buddicons-buddypress-logo"'},{value:'"buddicons-community"'},{value:'"buddicons-forums"'},{value:'"buddicons-friends"'},{value:'"buddicons-groups"'},{value:'"buddicons-pm"'},{value:'"buddicons-replies"'},{value:'"buddicons-topics"'},{value:'"buddicons-tracking"'},{value:'"building"'},{value:'"businessman"'},{value:'"businessperson"'},{value:'"businesswoman"'},{value:'"calculator"'},{value:'"camera-alt"'},{value:'"car"'},{value:'"calendar-alt"'},{value:'"calendar"'},{value:'"camera"'},{value:'"carrot"'},{value:'"cart"'},{value:'"category"'},{value:'"chart-area"'},{value:'"chart-bar"'},{value:'"chart-line"'},{value:'"chart-pie"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"cloud-saved"'},{value:'"cloud-upload"'},{value:'"cloud"'},{value:'"columns"'},{value:'"code-standards"'},{value:'"coffee"'},{value:'"color-picker"'},{value:'"controls-back"'},{value:'"controls-forward"'},{value:'"controls-pause"'},{value:'"controls-play"'},{value:'"controls-repeat"'},{value:'"controls-skipback"'},{value:'"controls-skipforward"'},{value:'"controls-volumeoff"'},{value:'"controls-volumeon"'},{value:'"cover-image"'},{value:'"dashboard"'},{value:'"database"'},{value:'"database-add"'},{value:'"database-export"'},{value:'"database-import"'},{value:'"database-remove"'},{value:'"database-view"'},{value:'"desktop"'},{value:'"dismiss"'},{value:'"download"'},{value:'"drumstick"'},{value:'"edit"'},{value:'"edit-large"'},{value:'"edit-page"'},{value:'"editor-aligncenter"'},{value:'"editor-alignleft"'},{value:'"editor-alignright"'},{value:'"editor-bold"'},{value:'"editor-break"'},{value:'"editor-code"'},{value:'"editor-code-duplicate"'},{value:'"editor-contract"'},{value:'"editor-customchar"'},{value:'"editor-expand"'},{value:'"editor-help"'},{value:'"editor-indent"'},{value:'"editor-insertmore"'},{value:'"editor-italic"'},{value:'"editor-justify"'},{value:'"editor-kitchensink"'},{value:'"editor-ltr"'},{value:'"editor-ol-rtl"'},{value:'"editor-ol"'},{value:'"editor-outdent"'},{value:'"editor-paragraph"'},{value:'"editor-paste-text"'},{value:'"editor-paste-word"'},{value:'"editor-quote"'},{value:'"editor-removeformatting"'},{value:'"editor-rtl"'},{value:'"editor-spellcheck"'},{value:'"editor-strikethrough"'},{value:'"editor-table"'},{value:'"editor-textcolor"'},{value:'"editor-ul"'},{value:'"editor-underline"'},{value:'"editor-unlink"'},{value:'"editor-video"'},{value:'"email-alt"'},{value:'"email-alt2"'},{value:'"embed-audio"'},{value:'"embed-generic"'},{value:'"embed-photo"'},{value:'"embed-post"'},{value:'"embed-video"'},{value:'"excerpt-view"'},{value:'"external"'},{value:'"facebook-alt"'},{value:'"facebook"'},{value:'"feedback"'},{value:'"flag"'},{value:'"food"'},{value:'"format-aside"'},{value:'"format-audio"'},{value:'"format-chat"'},{value:'"format-gallery"'},{value:'"format-image"'},{value:'"format-quote"'},{value:'"format-status"'},{value:'"format-video"'},{value:'"forms"'},{value:'"fullscreen-alt"'},{value:'"fullscreen-exit-alt"'},{value:'"games"'},{value:'"google"'},{value:'"googleplus"'},{value:'"grid-view"'},{value:'"groups"'},{value:'"hammer"'},{value:'"heart"'},{value:'"hourglass"'},{value:'"id-alt"'},{value:'"image-crop"'},{value:'"image-filter"'},{value:'"image-flip-horizontal"'},{value:'"image-flip-vertical"'},{value:'"image-rotate-left"'},{value:'"image-rotate-right"'},{value:'"image-rotate"'},{value:'"images-alt"'},{value:'"images-alt2"'},{value:'"index-card"'},{value:'"info-outline"'},{value:'"info"'},{value:'"insert-after"'},{value:'"insert-before"'},{value:'"insert"'},{value:'"instagram"'},{value:'"keyboard-hide"'},{value:'"laptop"'},{value:'"leftright"'},{value:'"lightbulb"'},{value:'"list-view"'},{value:'"linkedin"'},{value:'"location-alt"'},{value:'"location"'},{value:'"lock-duplicate"'},{value:'"lock"'},{value:'"media-archive"'},{value:'"media-audio"'},{value:'"media-code"'},{value:'"media-default"'},{value:'"media-document"'},{value:'"media-interactive"'},{value:'"media-spreadsheet"'},{value:'"media-text"'},{value:'"media-video"'},{value:'"megaphone"'},{value:'"menu-alt"'},{value:'"menu-alt2"'},{value:'"menu-alt3"'},{value:'"money-alt"'},{value:'"microphone"'},{value:'"migrate"'},{value:'"minus"'},{value:'"money"'},{value:'"move"'},{value:'"nametag"'},{value:'"networking"'},{value:'"no-alt"'},{value:'"open-folder"'},{value:'"palmtree"'},{value:'"paperclip"'},{value:'"performance"'},{value:'"pets"'},{value:'"pdf"'},{value:'"phone"'},{value:'"pinterest"'},{value:'"playlist-audio"'},{value:'"playlist-video"'},{value:'"plus-alt"'},{value:'"plus-light"'},{value:'"plus"'},{value:'"portfolio"'},{value:'"post-status"'},{value:'"pressthis"'},{value:'"products"'},{value:'"plugins-checked"'},{value:'"plus-alt2"'},{value:'"podio"'},{value:'"printer"'},{value:'"privacy"'},{value:'"randomize"'},{value:'"reddit"'},{value:'"redo"'},{value:'"remove"'},{value:'"rest-api"'},{value:'"rss"'},{value:'"saved"'},{value:'"schedule"'},{value:'"screenoptions"'},{value:'"share-alt"'},{value:'"share-alt2"'},{value:'"share"'},{value:'"shield-alt"'},{value:'"shield"'},{value:'"shortcode"'},{value:'"slides"'},{value:'"smartphone"'},{value:'"smiley"'},{value:'"sort"'},{value:'"sos"'},{value:'"star-empty"'},{value:'"star-filled"'},{value:'"star-half"'},{value:'"sticky"'},{value:'"store"'},{value:'"spotify"'},{value:'"superhero"'},{value:'"superhero-alt"'},{value:'"table-col-after"'},{value:'"table-col-before"'},{value:'"table-col-delete"'},{value:'"table-row-after"'},{value:'"table-row-before"'},{value:'"table-row-delete"'},{value:'"tablet"'},{value:'"tag"'},{value:'"tagcloud"'},{value:'"testimonial"'},{value:'"text-page"'},{value:'"thumbs-down"'},{value:'"thumbs-up"'},{value:'"tickets-alt"'},{value:'"tickets"'},{value:'"tide"'},{value:'"translation"'},{value:'"trash"'},{value:'"twitch"'},{value:'"twitter"'},{value:'"twitter-alt"'},{value:'"undo"'},{value:'"universal-access-alt"'},{value:'"universal-access"'},{value:'"unlock"'},{value:'"update-alt"'},{value:'"update"'},{value:'"upload"'},{value:'"vault"'},{value:'"video-alt"'},{value:'"video-alt2"'},{value:'"video-alt3"'},{value:'"warning"'},{value:'"welcome-add-page"'},{value:'"welcome-comments"'},{value:'"welcome-learn-more"'},{value:'"welcome-view-site"'},{value:'"welcome-widgets-menus"'},{value:'"welcome-write-blog"'},{value:'"whatsapp"'},{value:'"wordpress-alt"'},{value:'"wordpress"'},{value:'"xing"'},{value:'"yes-alt"'},{value:'"youtube"'}]}},size:{defaultValue:{value:"20"},description:"Size of the icon",name:"size",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/dashicon/index.tsx#Dashicon"]={docgenInfo:Dashicon.__docgenInfo,name:"Dashicon",path:"packages/components/src/dashicon/index.tsx#Dashicon"})}catch(__react_docgen_typescript_loader_error){}function Icon({icon=null,size="string"==typeof icon?20:24,...additionalProps}){if("string"==typeof icon)return(0,jsx_runtime.jsx)(dashicon,{icon,size,...additionalProps});if((0,react.isValidElement)(icon)&&dashicon===icon.type)return(0,react.cloneElement)(icon,{...additionalProps});if("function"==typeof icon)return(0,react.createElement)(icon,{size,...additionalProps});if(icon&&("svg"===icon.type||icon.type===svg.Wj)){const appliedProps={...icon.props,width:size,height:size,...additionalProps};return(0,jsx_runtime.jsx)(svg.Wj,{...appliedProps})}return(0,react.isValidElement)(icon)?(0,react.cloneElement)(icon,{size,...additionalProps}):icon}const icon=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:{value:"null"},description:"The icon to render. Supported values are: Dashicons (specified as\nstrings), functions, Component instances and `null`.",name:"icon",required:!1,type:{name:"IconType"}},size:{defaultValue:{value:"'string' === typeof icon ? 20 : 24"},description:"The size (width and height) of the icon.",name:"size",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"packages/components/src/icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/ui/utils/get-valid-children.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getValidChildren(children){return"string"==typeof children?[children]:_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./packages/components/src/v-stack/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>v_stack_component});var context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),hook=__webpack_require__("./packages/components/src/h-stack/hook.tsx");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedVStack(props,forwardedRef){const vStackProps=function useVStack(props){const{expanded=!1,alignment="stretch",...otherProps}=(0,use_context_system.y)(props,"VStack");return(0,hook.R)({direction:"column",expanded,alignment,...otherProps})}(props);return(0,jsx_runtime.jsx)(component.Z,{...vStackProps,ref:forwardedRef})}UnconnectedVStack.displayName="UnconnectedVStack";const VStack=(0,context_connect.Iq)(UnconnectedVStack,"VStack"),v_stack_component=VStack;try{VStack.displayName="VStack",VStack.__docgenInfo={description:"`VStack` (or Vertical Stack) is a layout component that arranges child\nelements in a vertical line.\n\n`VStack` can render anything inside.\n\n```jsx\nimport {\n\t__experimentalText as Text,\n\t__experimentalVStack as VStack,\n} from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<VStack>\n\t\t\t<Text>Code</Text>\n\t\t\t<Text>is</Text>\n\t\t\t<Text>Poetry</Text>\n\t\t</VStack>\n\t);\n}\n```",displayName:"VStack",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"'stretch'"},description:"Determines how the child elements are aligned.\n\n-   `top`: Aligns content to the top.\n-   `topLeft`: Aligns content to the top/left.\n-   `topRight`: Aligns content to the top/right.\n-   `left`: Aligns content to the left.\n-   `center`: Aligns content to the center.\n-   `right`: Aligns content to the right.\n-   `bottom`: Aligns content to the bottom.\n-   `bottomLeft`: Aligns content to the bottom/left.\n-   `bottomRight`: Aligns content to the bottom/right.\n-   `edge`: Justifies content to be evenly spread out up to the main axis edges of the container.\n-   `stretch`: Stretches content to the cross axis edges of the container.",name:"alignment",required:!1,type:{name:'(string & {}) | "baseline" | "inherit" | "initial" | "left" | "center" | "right" | "end" | "top" | "bottom" | "start" | "-moz-initial" | "revert" | "unset" | "edge" | "stretch" | ... 8 more ... | "self-start"'}},spacing:{defaultValue:null,description:"The amount of space between each child element. Spacing in between each\nchild can be adjusted by using `spacing`. The value of `spacing` works as\na multiplier to the library's grid system (base of `4px`).",name:"spacing",required:!1,type:{name:"Width<string | number>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/v-stack/component.tsx#VStack"]={docgenInfo:VStack.__docgenInfo,name:"VStack",path:"packages/components/src/v-stack/component.tsx#VStack"})}catch(__react_docgen_typescript_loader_error){}},"./packages/deprecated/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>deprecated});var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/hooks/build-module/index.js");const logged=Object.create(null);function deprecated(feature,options={}){const{since,version,alternative,plugin,link,hint}=options,message=`${feature} is deprecated${since?` since version ${since}`:""}${version?` and will be removed${plugin?` from ${plugin}`:""} in version ${version}`:""}.${alternative?` Please use ${alternative} instead.`:""}${link?` See: ${link}`:""}${hint?` Note: ${hint}`:""}`;message in logged||((0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.Kw)("deprecated",feature,options,message),console.warn(message),logged[message]=!0)}},"./packages/icons/build-module/library/wordpress.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},"./packages/primitives/build-module/svg/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,G:()=>G,y$:()=>Path,UL:()=>Rect,Wj:()=>SVG});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const Circle=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle",props),G=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",props),Path=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",props),Rect=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect",props),SVG=({className,isPressed,...props})=>{const appliedProps={...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,{"is-pressed":isPressed})||void 0,"aria-hidden":!0,focusable:!1};return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg",appliedProps)}},"./packages/components/src/icon/stories/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,FillColor:()=>FillColor,WithAFunction:()=>WithAFunction,WithAComponent:()=>WithAComponent,WithAnSVG:()=>WithAnSVG,WithADashicon:()=>WithADashicon});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/icons/build-module/library/wordpress.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/icon/index.tsx"),_v_stack__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/v-stack/component.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Icon",component:___WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{sourceLink:"packages/components/src/icon",controls:{expanded:!0},docs:{source:{state:"open"}}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__.Z};const FillColor=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{fill:"blue"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args})});FillColor.displayName="FillColor",FillColor.args={...Default.args};const WithAFunction=Template.bind({});WithAFunction.args={...Default.args,icon:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Wj,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.y$,{d:"M5 4v3h5.5v12h3V7H19V4z"})})};const MyIconComponent=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Wj,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.y$,{d:"M5 4v3h5.5v12h3V7H19V4z"})});MyIconComponent.displayName="MyIconComponent";const WithAComponent=Template.bind({});WithAComponent.args={...Default.args,icon:MyIconComponent};const WithAnSVG=Template.bind({});WithAnSVG.args={...Default.args,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Wj,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.y$,{d:"M5 4v3h5.5v12h3V7H19V4z"})})};const WithADashicon=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_v_stack__WEBPACK_IMPORTED_MODULE_4__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{children:"This won’t show an icon if the Dashicons stylesheet isn’t loaded."})]});WithADashicon.displayName="WithADashicon",WithADashicon.args={...Default.args,icon:"wordpress"},WithADashicon.parameters??={},WithADashicon.parameters.docs??={},WithADashicon.parameters.docs.description??={},WithADashicon.parameters.docs.description.story??='Although it\'s preferred to use icons from the `@wordpress/icons` package, Dashicons are still supported,\nas long as you are in a context where the Dashicons stylesheet is loaded. To simulate that here,\nuse the Global CSS Injector in the Storybook toolbar at the top and select the "WordPress" preset.';try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/icon/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/icon/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}try{WithADashicon.displayName="WithADashicon",WithADashicon.__docgenInfo={description:'Although it\'s preferred to use icons from the `@wordpress/icons` package, Dashicons are still supported,\nas long as you are in a context where the Dashicons stylesheet is loaded. To simulate that here,\nuse the Global CSS Injector in the Storybook toolbar at the top and select the "WordPress" preset.',displayName:"WithADashicon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/icon/stories/index.tsx#WithADashicon"]={docgenInfo:WithADashicon.__docgenInfo,name:"WithADashicon",path:"packages/components/src/icon/stories/index.tsx#WithADashicon"})}catch(__react_docgen_typescript_loader_error){}}}]);