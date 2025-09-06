import TextType from "@/blocks/TextAnimations/TextType/TextType";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {/* O container que agrupa os textos */}
            <div className="text-center">
                {" "}
                {/* Centraliza o texto dentro deste div */}
                <TextType
                    text={["Desenvolvedor web", "Backend developer", "Hello world!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="font-titulo font-semibold text-3xl md:text-5xl lg:text-7xl "
                />
                <h3 className="font-subtitulo font-semibold text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4">
                    {/* Quebra de linha para melhor visualização */}
                    Desenvolvedor focado em resolver problemas complexos <br />e ver o código ganhar vida.
                </h3>
            </div>
        </div>
    );
}
