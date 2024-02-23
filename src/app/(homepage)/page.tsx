import Image from "next/image";
import {
    ArrowRightCircle,
    View,
    ArrowDownToDot,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

const STATISTIC = [
    { id: "01", label: "Unit tersedia", value: "100+" },
    { id: "02", label: "Akses Jalan Tol", value: "5 Min" },
    { id: "03", label: "Cicilan KPR Terjangkau", value: "3 Juta" },
];

export default function Homepage() {
    return (
        <main>
            <div className="flex flex-col lg:flex-row">
                {/* Left Section */}
                <section className="lg:w-1/2 h-full md:h-screen bg-white p-5 pt-20 md:pt-28 md:p-10">
                    <section>
                        <h1 className="text-5xl md:text-4xl lg:text-6xl font-semibold">
                            Maximize Profits, <br />
                            Minimize Stress
                        </h1>
                    </section>
                    <hr className="my-5" />
                    <section className="flex flex-col lg:flex-row divide-x space-x-6">
                        <section className="flex w-full">
                            <Image
                                src={
                                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                                }
                                alt=""
                                width={100}
                                height={100}
                                className="size-16 md:size-20 bg-gray-50 rounded-full overflow-hidden"
                            />
                            <div className="flex justify-center items-center -ml-5 size-16 md:size-20 bg-blue-100 rounded-full overflow-hidden">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 38 38"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.48834 5.48834L31.9883 31.9883"
                                        stroke="#242424"
                                    />
                                    <path
                                        d="M18.7383 0V37.4767"
                                        stroke="#242424"
                                    />
                                    <path
                                        d="M31.9883 5.48834L5.48834 31.9883"
                                        stroke="#242424"
                                    />
                                    <path
                                        d="M37.4767 18.7383H2.58088e-05"
                                        stroke="#242424"
                                    />
                                </svg>
                            </div>
                        </section>
                        <section className="px-5 space-y-2">
                            <p className="font-medium text-md">
                                Experience the value, convenience, support and
                                services that you ll only find living on campus.
                                We offer a variety of options for students from
                                their first day on campus through graduation.{" "}
                            </p>
                            <button className="w-max flex items-center group">
                                <span className="bg-black text-white p-1 pl-4 pr-6 rounded-full text-sm">
                                    See Available Unit{" "}
                                </span>
                                <span className="group-hover:animate-ping flex items-center justify-center -ml-3 bg-red-500 size-8 aspect-square rounded-full">
                                    <ArrowRightCircle color="white" />
                                </span>
                            </button>
                        </section>
                    </section>
                    {/* Statistic */}
                    <section className="grid grid-cols-2 gap-5 md:grid-cols-3 divide-x mt-5 lg:mt-16">
                        {STATISTIC.map((item) => (
                            <article key={item.id} className="leading-4 px-2">
                                <h1 className="text-xl md:text-2xl font-semibold">
                                    {item.value}
                                </h1>
                                <h2>{item.label}</h2>
                            </article>
                        ))}
                    </section>
                    <p className="line-clamp-5 mt-4 p-2 text-gray-600">
                        Savyavasa redefines the concept of understated luxury by
                        reinterpreting natural landscapes and Indonesia’s robust
                        artisan culture in modern living. With a gift of mother
                        nature whose elements sustain life and promote inner
                        peace, Savyavasa reimagines an oasis of tranquility
                        where urban dynamism is tempered with serenity,
                        providing a near-perfect living experience.Savyavasa
                        redefines the concept of understated luxury by
                        reinterpreting natural landscapes and Indonesia’s robust
                        artisan culture in modern living. With a gift of mother
                        nature whose elements sustain life and promote inner
                        peace, Savyavasa reimagines an oasis of tranquility
                        where urban dynamism is tempered with serenity,
                        providing a near-perfect living experience.
                    </p>
                    <section className="w-full flex justify-center items-center mt-5">
                        <ArrowDownToDot className="animate-bounce cursor-pointer" />
                    </section>
                </section>
                {/* Right Section */}
                <section
                    className="lg:w-1/2 h-screen p-10 md:pt-28"
                    style={{
                        background: `url("/assets/images/png/bg-white-home.png"), linear-gradient(180deg, rgba(249,249,249,0) 0%, rgba(0,0,0,0.28757440476190477) 100%)`,
                        backgroundSize: "cover",
                        backgroundBlendMode: "multiply",
                    }}
                >
                    <div className="w-full h-full flex flex-col justify-between">
                        <article className="relative p-4 px-3 h-max w-44 bg-gray-0 rounded-xl bg-white/10 backdrop-blur-[2px] bg-opacity-100 border border-gray-50/10">
                            <View className="absolute right-3 top-3 size-6 bg-white/10 hover:bg-white cursor-pointer rounded p-1" />
                            <h1 className="text-xl font-semibold">
                                Flaminggo Resident
                            </h1>
                            <p className="text-sm text-gray-500 mt-2">
                                ing a near-perfect living experience.
                            </p>
                            <button className="w-max flex items-center group mt-4">
                                <span className="flex items-center space-x-2 bg-black/80 hover:bg-black text-white p-1 px-3 rounded-full text-sm">
                                    Learn More
                                    <ArrowRightCircle
                                        color="white"
                                        size={16}
                                        className="ml-2"
                                    />
                                </span>
                            </button>
                        </article>
                        <article className="p-2 w-full h-max">
                            <p className="text-sm text-white/80">
                                Savyavasa redefines the concept of understated
                                luxury by reinterpreting natural landscapes and
                                Indonesia’s robust artisan culture in modern
                                living.
                            </p>
                            <section className="grid grid-cols-3 mt-3">
                                {STATISTIC.map((item) => (
                                    <article
                                        key={item.id}
                                        className="leading-4 px-2 text-white/70"
                                    >
                                        <h1 className="text-lg font-semibold">
                                            {item.value}
                                        </h1>
                                        <h2 className="text-sm">
                                            {item.label}
                                        </h2>
                                    </article>
                                ))}
                            </section>
                            <section className="grid bg-white items-center mt-5 p-2 overflow-x-scroll bg-white/5 backdrop-blur-[1px] bg-opacity-100">
                                <section className="flex space-x-3">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <Image
                                            key={item}
                                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D"
                                            alt=""
                                            width={100}
                                            height={100}
                                            className="cursor-pointer"
                                        />
                                    ))}
                                </section>
                            </section>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    );
}
