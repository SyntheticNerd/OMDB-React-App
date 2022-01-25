import { Details } from "./Details";
import { CloseBtn } from "./Btn";

export default function Modal({ show, onClose, children }) {
  return (
    <>
      {show ? (
        <></>
      ) : (
        <>
          <CloseBtn onClick={onClose} />
          {children}
        </>
      )}
    </>
  );
}
//https://codesandbox.io/s/4ill1?file=/src/App.js:65-97
