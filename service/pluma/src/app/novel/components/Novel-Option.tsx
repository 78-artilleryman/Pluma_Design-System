import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import useOutside from "@/common/hooks/use-outside";
import useToggle from "@/common/hooks/use-toggle";

function NovelOption() {
  const { isToggle, onToggle } = useToggle();
  const ref = useOutside<HTMLUListElement>({ onCloseToggle: onToggle });
  return (
    <>
      <GoKebabHorizontal
        color="white"
        className="cursor-pointer z-40 absolute right-4 top-4"
        onClick={onToggle}
        size={20}
      />
      {isToggle && (
        <ul
          className="z-40 absolute w-20 h-[70px] flex flex-col gap-3 items-center justify-center bg-gray-200 top-0 right-0 rounded-bl-[18px] rounded-tr-[18px]"
          ref={ref}>
          <li className="text-sm font-bold text-red-600">삭제</li>
          <li className="text-sm font-bold text-blackAlpha-900">수정</li>
        </ul>
      )}
    </>
  );
}

export default NovelOption;