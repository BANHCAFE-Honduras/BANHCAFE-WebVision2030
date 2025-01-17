type LogoProps = {
  className?: string;
  size?: number;
  width?: number;
  // height?: number;
};

export function Logo(props: LogoProps) {
  return (
    <div>
      <svg
        width={props.width ?? props.size ? props.size! + 161 : 205}
        // height={props.height ?? props.size ?? 44}
        viewBox="0 0 205 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M57.028 10.748c2.746 0 6.362 2.075 6.362 6.907 0 4.82-2.608 5.36-2.608 5.36s3.687 1.403 3.687 6.17c0 6.295-6.164 6.895-6.164 6.895H46.913V10.748h10.115zm-3.285 6.17v3.549s3.082.534 3.082-1.74c0-2.283-3.082-1.81-3.082-1.81zm0 8.98v4.32s3.753.656 3.753-2.118c0-2.768-3.753-2.201-3.753-2.201z"
          fill="currentColor"
        />
        <path
          d="M70.698 10.687h8.31l7.513 25.459h-8.112l-.672-3.082h-5.762l-.671 3.082h-8.035l7.43-25.459zm4.156 8.371l-1.674 8.376h3.346l-1.672-8.376zM157.535 10.687h8.31l7.507 25.459h-8.106l-.672-3.082h-5.762l-.671 3.082h-8.035l7.429-25.459zm4.155 8.371l-1.678 8.376h3.357l-1.679-8.376zM86.977 10.682v25.464h7.303l-.132-11.255-.275-1.876.138-.066 6.642 13.197h7.297V10.748h-7.231v9.114s.264 2.746.534 4.155l.132 1.073-7.033-14.408h-7.375zM121.753 10.682v8.91h-4.695v-8.91h-7.231v25.53h7.231v-8.85h4.695v8.85h7.237v-25.53h-7.237zM150.299 12.492l-4.827 6.23s-.737-.534-2.344-.468c-1.613.067-5.03 1.475-5.03 5.157s3.015 5.157 5.156 5.228c2.147.066 2.345-.671 2.345-.671l4.556 6.5s-2.278 1.87-6.697 1.87c-4.425 0-13.004-3.346-13.004-12.993 0-9.653 8.31-12.867 12.729-12.867 4.435.006 7.116 2.014 7.116 2.014zM188.288 17.72V10.65h-14.27v.033h-.066v25.524h7.842v-8.844h5.69v-6.664h-5.69v-2.977h6.494zM204.171 29.415h-6.5v-2.052h5.768v-6.66h-5.768v-2.982h6.5v-7.072h-14.276v25.563h7.776v-.072h6.5v-6.725zM26.666 27.313l-11.65 16.103s2.119 1.519 6.202-.341c4.084-1.844 7.996-7.656 7.121-12.493 0 0-.148-1.002-.6-1.926-.45-.936-1.073-1.343-1.073-1.343zM25.775 26.653L14.146 42.766s-2.107-1.535-1.629-5.987c.474-4.458 4.755-9.994 9.631-10.693 0 0 .99-.17 2.02-.033 1.029.132 1.607.6 1.607.6z"
          fill="currentColor"
        />
        <path
          d="M19.006 27.352L.09 21.265s-.782 2.482 2.24 5.784c3.026 3.307 9.757 5.228 14.094 2.906 0 0 .902-.452 1.65-1.167.738-.716.93-1.436.93-1.436zM19.369 26.306L.438 20.24s.808-2.482 5.19-3.406c4.385-.925 10.978 1.43 13.147 5.844 0 0 .473.892.655 1.91.198 1.013-.061 1.717-.061 1.717z"
          fill="currentColor"
        />
        <path
          d="M16.579 19.878L16.562 0s-2.608.017-4.82 3.907C9.522 7.81 9.765 14.798 13.314 18.21c0 0 .71.716 1.618 1.211.903.495 1.646.457 1.646.457zM17.69 19.895L17.64.015s2.604.006 4.838 3.891c2.224 3.891 2.015 10.886-1.524 14.314 0 0-.704.721-1.613 1.211-.902.495-1.65.463-1.65.463z"
          fill="currentColor"
        />
        <path
          d="M22.825 15.585L41.73 9.46s-.82-2.482-5.2-3.384c-4.392-.908-10.98 1.463-13.126 5.888 0 0-.468.897-.655 1.915-.187 1.013.077 1.706.077 1.706zM23.155 16.648l18.899-6.159s.792 2.488-2.224 5.806c-3.01 3.319-9.735 5.267-14.083 2.95 0 0-.908-.451-1.656-1.161-.743-.715-.936-1.436-.936-1.436z"
          fill="currentColor"
        />
        <path
          d="M29.099 20.197L40.87 36.212s2.092-1.558 1.574-6.01c-.517-4.452-4.848-9.955-9.724-10.605 0 0-.996-.16-2.02-.016-1.023.137-1.601.616-1.601.616zM28.196 20.836L39.99 36.828s-2.113 1.536-6.202-.28c-4.1-1.811-8.063-7.579-7.237-12.432 0 0 .143-1.002.583-1.938.44-.935 1.062-1.342 1.062-1.342z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
