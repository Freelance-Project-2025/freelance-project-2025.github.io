import { ReactNode } from "react";


export interface SectionProps {
    children: ReactNode,
    id?: string,
    className?: string,
    borderTop?: boolean
}

/**
 * Wraps around a section tag to offer consistent padding to all pages
 *
 * @param props - The props for the Section component.
 * @param children - Contents of the section.
 * @param id - give an id to the section to offer scrollability
 * @param className - Additional classes to be added to the section (optional).
 * @param borderTop - Add top border to the section as a divider (optional)
 * @returns  The rendered container component.
 * 
 * 
 * @exmaple 
 * <Section id="hero-section" className="grid grid-cols-4" borderTop>
 *  children
 * </Section>
 *
 * @author Diljith P D
 */
const Section = ({
    children,
    id = undefined,
    className = "",
    borderTop = false,
}: SectionProps) => {
    return (
        <section id={id} className={`relative w-full px-4 md:px-16 flex justify-center ${borderTop ? 'border border-white border-0 border-t-[1px]' : ''}`}>
            <div className={`w-full max-w-[1920px] ${className}`}>
                {children}
            </div>
        </section>
    )
}

export default Section;