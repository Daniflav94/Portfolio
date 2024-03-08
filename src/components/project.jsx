import { useState } from "react";
import {
  AngularIcon,
  FirebaseIcon,
  TSIcon,
  CSSIcon,
  HTMLIcon,
  JSIcon,
  JavaIcon,
  GraphQLIcon,
  JestIcon,
  MySQLIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  SpringIcon,
} from "../assets/image/stacks";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ModalProject } from "./modalProject";

export function Project({ item }) {
  const [isHover, setIsHover] = useState("");

  let widthScreen = window.screen.width;

  return (
    <Dialog.Root>
      <>
        <div
          key={item.id}
          className="w-96 h-60 box-border overflow-hidden relative border-b-2 border-lilac hover:scale-110 transition ease-in-out"
          onMouseEnter={() => setIsHover(item.id)}
          onMouseLeave={() => setIsHover("")}
        >
          <img src={item.image} alt="imagem aplicação" />
          <div className="w-96 h-60 bg-black/55 absolute top-0 "></div>
          <div className="absolute top-0 left-0 w-96 h-60 flex flex-col justify-center items-center z-[999999]">
            <span className=" text-zinc-50 font-medium text-2xl">
              {item.title}
            </span>
            <div className="flex justify-center gap-2 pt-3">
              {item.stacks.map((stack, key) => (
                <div key={key}>
                  {stack === "angular" && <AngularIcon justIcon={true} />}
                  {stack === "firebase" && <FirebaseIcon justIcon={true} />}
                  {stack === "typescript" && <TSIcon justIcon={true} />}
                  {stack === "react" && <ReactIcon justIcon={true} />}
                  {stack === "html" && <HTMLIcon justIcon={true} />}
                  {stack === "css" && <CSSIcon justIcon={true} />}
                  {stack === "node" && <NodeIcon justIcon={true} />}
                  {stack === "mysql" && <MySQLIcon justIcon={true} />}
                  {stack === "javascript" && <JSIcon justIcon={true} />}
                  {stack === "jest" && <JestIcon justIcon={true} />}
                  {stack === "graphql" && <GraphQLIcon justIcon={true} />}
                  {stack === "java" && <JavaIcon justIcon={true} />}
                  {stack === "spring" && <SpringIcon justIcon={true} />}
                </div>
              ))}
            </div>
          </div>
          {isHover === item.id && widthScreen >= 768 && (
            <Dialog.Trigger>
              <button className="absolute z-[999999] -bottom-0 left-0 w-full h-8 bg-lilac hover:bg-lilacDark text-zinc-50 font-medium text-sm animate-upButton">
                Ver mais
              </button>
            </Dialog.Trigger>
            
          )}
          {widthScreen <= 768 && (
              <Dialog.Trigger>
              <button className="absolute z-[999999] -bottom-0 left-0 w-full h-8 bg-lilac text-zinc-50 font-medium text-sm">
                Ver mais
              </button>
            </Dialog.Trigger>
              )}
        </div>
        <ModalProject project={item} />
      </>
    </Dialog.Root>
  );
}
