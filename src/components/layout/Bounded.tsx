import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
};

export const Bounded = ({
  as: Comp = "section",
  ref,
  className,
  children,
  ...restProps
}: BoundedProps) => {
  return (
    <Comp
      ref={ref}
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
};
