type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-content)] px-5 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
