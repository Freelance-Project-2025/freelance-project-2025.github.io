import { ReactNode, useMemo, FC } from 'react';

export interface ContainerProps {
    children: ReactNode
    className?: string
    disableAnimation?: boolean
};


/**
 * Wraps around the page to provide a consistent layout to all the pages.
 *
 * @param props - The props for the Container component.
 * @param children - Contents of the page.
 * @param className - Additional classes to be added to the container (optional).
 * @returns  The rendered container component.
 * 
 * 
 * @exmaple 
 * <Container className="flex">
 *  children
 * </Container>
 *
 * @author Diljith P D
 */
const Container: FC<ContainerProps> = ({
    children,
    className,
}) => {
    const containerClass = useMemo(() =>
        `w-screen overflow-x-hidden min-h-screen h-full flex flex-col items-center justify-center relative ${className}`,
        [className]);

    return (
        <div className={containerClass}>
            {children}
        </div>
    )
}



export default Container;