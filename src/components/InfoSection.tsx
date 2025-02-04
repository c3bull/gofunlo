import {InfoSectionInterface} from "@/utils/typesAndInterfaces";

export default function InfoSection({ title, content, flag, additionalContent, foodDiets }:InfoSectionInterface) {
    const hasContent = !!content?.trim();
    const hasAdditional = !!additionalContent?.trim();

    const remap = {
        own: "Na własną rękę",
        no_eggs: "🥚 Bez jajek",
        vegan: "🌱 Wegańskie",
        no_fish: "🐟 Bez ryb",
        vegetarian: "☘️ Wegetariańskie",
        provided: "Zapewniony",
        bus: "Autobus",
    };

    return (
        <div>
            <h3 className="font-semibold">{title}</h3>
            {hasContent ? (
                <div>
                    {content}
                    {flag === "ubezpieczenie" || flag === "wyzywienie" && hasAdditional && (
                        <span>, {additionalContent}</span>
                    )}
                    {flag === "wyzywienie" && foodDiets && foodDiets.length > 0 && content === "tak" && (
                        <div>
                            {foodDiets.map((food, index) => (
                                <p key={index}>{remap[food as keyof typeof remap]}</p>
                            ))}
                        </div>
                    )}

                </div>
            ) : (
                <p className="text-gray-600">
                    Brak informacji – skontaktuj się z organizatorem.
                </p>
            )}
        </div>
    );
};