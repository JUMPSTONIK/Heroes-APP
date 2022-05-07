import ContentLoader from "react-content-loader";

interface sectionprop {
    section: string;
}

export const CardLoader = (section: sectionprop) => {
    // console.log(section);
    const CardCount = Math.trunc((window.innerWidth * 0.9) / 317);
    // console.log(CardCount);

    return (
        <ContentLoader
            height={section.section !== "general" ? 400 : 550}
            speed={2}
            backgroundColor="#6A4DBC"
            foregroundColor="#ecebeb"
            style={{ width: "100%" }}
        >
            <rect x="16" y="60" rx="5" ry="5" width="200" height="42" />
            {new Array(CardCount).fill(" ").map((_, i) => {
                return (
                    <rect
                        key={i}
                        x={`${333 * i + 70}`}
                        y="130"
                        rx="5"
                        ry="5"
                        width="317"
                        height="174"
                    />
                );
            })}

            {section.section === "general" &&
                new Array(CardCount).fill(" ").map((_, i) => {
                    return (
                        <rect
                            key={i}
                            x={`${333 * i + 70}`}
                            y="320"
                            rx="5"
                            ry="5"
                            width="317"
                            height="174"
                        />
                    );
                })}
        </ContentLoader>
    );
};
