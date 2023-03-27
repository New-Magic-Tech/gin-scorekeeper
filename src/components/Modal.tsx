import Section from "./Section";

interface Props {
    children: JSX.Element | JSX.Element[];
  }
  
  export default function Modal({ children }: Props) {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="bg-green rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            {children}
          </div>
        </div>
      </div>
    );
  }