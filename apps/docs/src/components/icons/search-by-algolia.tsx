import * as React from "react";
import withDefaults from "@utils/with-defaults";
import {useTheme} from "@nextui-org/react";

interface Props {
  width?: number;
  height?: number;
  fill?: string;
}

const defaultProps = {
  width: 84.14,
  height: 11.404,
};

const SearchByAlgolia: React.FC<Props> = ({fill, width, height, ...props}) => {
  const {theme} = useTheme();

  return (
    <svg height={height} viewBox="0 0 84.14 11.404" width={width} {...props}>
      <path
        d="M39.52 0h8.4a1.5 1.5 0 011.5 1.5v8.4a1.5 1.5 0 01-1.5 1.5h-8.4a1.5 1.5 0 01-1.5-1.5V1.498a1.5 1.5 0 011.5-1.5zm21.23 9.045a1.96 1.96 0 01-2.22-2.083V.211L59.88 0v6.71c0 .163 0 1.194.87 1.2v1.135zm-5.491-1.1a5.219 5.219 0 00.939-.065V6.499a3.206 3.206 0 00-.8-.1 2.886 2.886 0 00-.454.035 1.366 1.366 0 00-.412.121.737.737 0 00-.295.249.472.472 0 00-.111.332.649.649 0 00.312.623 1.583 1.583 0 00.818.183zm-.118-4.911a3.334 3.334 0 011.129.166 1.8 1.8 0 01.731.463 1.8 1.8 0 01.385.751 3.46 3.46 0 01.117.937v3.48q-.47.093-.946.159a9.824 9.824 0 01-1.424.094 4.351 4.351 0 01-.959-.1 2.026 2.026 0 01-.745-.322 1.562 1.562 0 01-.481-.574 2.178 2.178 0 01-.174-.913 1.432 1.432 0 01.194-.772 1.64 1.64 0 01.53-.56 2.28 2.28 0 01.776-.311 4.455 4.455 0 01.921-.094 4.254 4.254 0 011 .121v-.226a1.674 1.674 0 00-.056-.442.952.952 0 00-.194-.37.9.9 0 00-.367-.25 1.6 1.6 0 00-.579-.1 4.938 4.938 0 00-.856.083 3.916 3.916 0 00-.638.155l-.163-1.11a5.294 5.294 0 01.748-.177 5.559 5.559 0 011.049-.09zm26.755 4.87a5.2 5.2 0 00.939-.066V6.462a3.213 3.213 0 00-.8-.1 2.884 2.884 0 00-.454.035 1.367 1.367 0 00-.412.121.739.739 0 00-.295.249.472.472 0 00-.11.332.649.649 0 00.311.623 1.562 1.562 0 00.818.183zm-.114-4.908a3.335 3.335 0 011.129.166 1.813 1.813 0 01.731.463 1.825 1.825 0 01.384.751 3.443 3.443 0 01.118.938v3.478c-.208.045-.523.1-.946.159a9.828 9.828 0 01-1.424.093 4.321 4.321 0 01-.959-.1 2.026 2.026 0 01-.745-.321 1.562 1.562 0 01-.481-.574 2.179 2.179 0 01-.174-.913 1.429 1.429 0 01.194-.772 1.641 1.641 0 01.53-.56 2.29 2.29 0 01.776-.311 4.456 4.456 0 011.393-.066 3.993 3.993 0 01.526.094v-.222a1.67 1.67 0 00-.055-.443.948.948 0 00-.194-.37.9.9 0 00-.367-.249 1.6 1.6 0 00-.579-.1 4.938 4.938 0 00-.856.083 3.923 3.923 0 00-.638.155l-.163-1.11a5.379 5.379 0 01.748-.176 5.889 5.889 0 011.049-.09zm-4.067-.643a.82.82 0 11.825-.82.823.823 0 01-.829.82zm.682 6.693h-1.361v-5.84l1.362-.214v6.052zm-2.386 0a1.96 1.96 0 01-2.225-2.084V.211l1.355-.215v6.71c0 .163 0 1.194.87 1.2v1.139zm-4.4-2.988a2.374 2.374 0 00-.378-1.411 1.325 1.325 0 00-2.092 0 2.381 2.381 0 00-.371 1.411 2.111 2.111 0 00.375 1.331 1.319 1.319 0 002.092 0 2.121 2.121 0 00.374-1.331zm1.386 0a3.281 3.281 0 01-.2 1.18 2.8 2.8 0 01-.571.965 2.524 2.524 0 01-.887.619 3.613 3.613 0 01-1.147.228 3.54 3.54 0 01-1.14-.228 2.58 2.58 0 01-.883-.619 2.852 2.852 0 01-.576-.965 3.212 3.212 0 01-.208-1.18 3.7 3.7 0 01.2-1.27 2.812 2.812 0 01.582-.958 2.6 2.6 0 01.886-.616A2.875 2.875 0 0170.183 3a2.951 2.951 0 011.132.214 2.471 2.471 0 01.887.616 2.857 2.857 0 01.575.958 3.544 3.544 0 01.218 1.27zm-10.195 0a2.416 2.416 0 00.374 1.459 1.273 1.273 0 00.967.395 2.064 2.064 0 00.61-.09 1.7 1.7 0 00.464-.211V4.248a5.3 5.3 0 00-.894-.114 1.352 1.352 0 00-1.129.508 2.4 2.4 0 00-.391 1.411zm3.765 2.67a2.6 2.6 0 01-.711 2.027 3.162 3.162 0 01-2.175.643 9.335 9.335 0 01-1.691-.2l.218-1.072a8.291 8.291 0 001.493.132 1.66 1.66 0 001.164-.332 1.3 1.3 0 00.346-.986v-.228a4.085 4.085 0 01-.53.2 2.62 2.62 0 01-.755.1 2.83 2.83 0 01-1.022-.177 2.129 2.129 0 01-.793-.519 2.361 2.361 0 01-.515-.854 4.988 4.988 0 01-.184-1.4 4.243 4.243 0 01.194-1.3 2.49 2.49 0 01.572-.909 2.633 2.633 0 01.911-.588 3.344 3.344 0 011.229-.231 7.358 7.358 0 011.24.121 9.925 9.925 0 011 .21v5.359z"
        data-name="Path 53"
        fill={fill}
      />
      <path
        d="M3.061 2.901v.824a2.264 2.264 0 00-1.228-.339 1.11 1.11 0 00-.7.2.628.628 0 00-.254.521.619.619 0 00.25.516 3.762 3.762 0 00.767.42c.226.1.4.18.529.251a3.565 3.565 0 01.436.295 1.174 1.174 0 01.363.453 1.462 1.462 0 01.116.6 1.376 1.376 0 01-.508 1.131 2.028 2.028 0 01-1.317.412 2.894 2.894 0 01-1.483-.344v-.865a2.4 2.4 0 001.478.477 1.1 1.1 0 00.7-.206.688.688 0 00.258-.57.607.607 0 00-.153-.4 1.1 1.1 0 00-.328-.276q-.178-.093-.533-.255l-.295-.135q-.141-.069-.278-.145a2.164 2.164 0 01-.287-.178q-.12-.1-.23-.2a.879.879 0 01-.2-.258 2.24 2.24 0 01-.113-.3 1.292 1.292 0 01-.053-.376 1.332 1.332 0 01.505-1.1 2.022 2.022 0 011.3-.4 2.777 2.777 0 011.258.247zm3.781 2.888v-.145a1.145 1.145 0 00-.251-.731.838.838 0 00-.67-.271.941.941 0 00-.7.3 1.441 1.441 0 00-.363.852zm.509 1.412v.711a2.4 2.4 0 01-1.2.258 1.957 1.957 0 01-2.076-2.074 2.2 2.2 0 01.517-1.547 1.71 1.71 0 011.316-.562 1.628 1.628 0 011.244.489 1.981 1.981 0 01.461 1.409 3.071 3.071 0 01-.049.525H4.875a1.2 1.2 0 00.453.816 1.5 1.5 0 00.937.282 1.851 1.851 0 001.086-.307zm3.344-.9h-.614a1.107 1.107 0 00-.683.177.548.548 0 00-.23.453.571.571 0 00.177.444.745.745 0 00.517.162.841.841 0 00.61-.215.742.742 0 00.223-.561v-.46zm-2.06-1.288v-.767a2.515 2.515 0 011.26-.274 1.4 1.4 0 011.607 1.559v2.6h-.784v-.484a1.19 1.19 0 01-1.107.516 1.3 1.3 0 01-.933-.335 1.129 1.129 0 01-.351-.853 1.072 1.072 0 01.448-.915 2.064 2.064 0 011.244-.328h.678v-.231a.892.892 0 00-.2-.634.89.89 0 00-.67-.214 2.06 2.06 0 00-1.187.363zm4.725-.977v.719a1.079 1.079 0 011.075-.759 1.449 1.449 0 01.25.024v.775a.954.954 0 00-.38-.072.81.81 0 00-.678.363 1.422 1.422 0 00-.267.864v2.181h-.791v-4.1h.791zm2.536 2.065a1.526 1.526 0 00.38 1.022 1.308 1.308 0 001.018.4 1.658 1.658 0 00.905-.267v.711a1.908 1.908 0 01-1.01.242 2.015 2.015 0 01-1.534-.606 2.112 2.112 0 01-.574-1.511 2.142 2.142 0 01.577-1.506 2.022 2.022 0 011.563-.626 2.119 2.119 0 01.977.226v.727a1.641 1.641 0 00-.9-.251 1.345 1.345 0 00-1.022.4 1.441 1.441 0 00-.38 1.039zm4.007-3.68v2.318a1.272 1.272 0 011.272-.759 1.285 1.285 0 01.961.372 1.415 1.415 0 01.363 1.034v2.745h-.792V5.547a.919.919 0 00-.214-.65.732.732 0 00-.562-.23.988.988 0 00-.714.307 1.265 1.265 0 00-.311.937v2.22h-.791v-5.71h.791zm7.572 5.073a.938.938 0 00.759-.384 1.537 1.537 0 00.307-.99 1.651 1.651 0 00-.307-1.07.967.967 0 00-.784-.376 1.038 1.038 0 00-.755.339 1.429 1.429 0 00-.335 1.042 1.565 1.565 0 00.323 1.082 1.027 1.027 0 00.791.356zm-1.11-5.073v2.238A1.387 1.387 0 0127.6 3.98a1.587 1.587 0 011.269.582 2.305 2.305 0 01.492 1.539 2.351 2.351 0 01-.468 1.474 1.532 1.532 0 01-1.284.61 1.382 1.382 0 01-1.244-.678v.622h-.8V2.421zm5.016 5.621l-1.632-4.006h.88l.509 1.332.637 1.733q.073-.243.582-1.729l.46-1.332h.84l-1.478 3.982q-.59 1.575-1.8 1.574a1.478 1.478 0 01-.372-.04v-.678a1.143 1.143 0 00.275.032 1.127 1.127 0 001.099-.868z"
        data-name="Path 54"
        fill={fill}
      />
      <path
        d="M44.907 2.542v-.387a.5.5 0 00-.5-.495h-1.149a.5.5 0 00-.5.495v.4a.069.069 0 00.087.066 3.608 3.608 0 011-.142 3.662 3.662 0 01.97.131.067.067 0 00.092-.068m-3.163.511l-.2-.2a.5.5 0 00-.7 0l-.235.235a.493.493 0 000 .7l.194.194a.07.07 0 00.1-.007 3.809 3.809 0 01.378-.442 3.553 3.553 0 01.447-.38.067.067 0 00.01-.1m2.106 1.242V5.99a.067.067 0 00.1.059l1.5-.778a.068.068 0 00.028-.093 1.871 1.871 0 00-1.559-.945.068.068 0 00-.069.066m0 4.074a2.269 2.269 0 112.273-2.268 2.273 2.273 0 01-2.273 2.268m0-5.493a3.22 3.22 0 102.281.941 3.222 3.222 0 00-2.281-.941"
        data-name="Path 55"
        fill={theme?.colors?.white?.value}
      />
    </svg>
  );
};

const MemoSearchByAlgolia = React.memo(SearchByAlgolia);

export default withDefaults(MemoSearchByAlgolia, defaultProps);
