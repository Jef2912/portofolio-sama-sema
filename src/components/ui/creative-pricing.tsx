import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: number | string;
    suffix?: string;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

function CreativePricing({
    tag = "Simple Pricing",
    title = "Make Short Videos That Pop",
    description = "Edit, enhance, and go viral in minutes",
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 z-10 relative">
            <div className="text-center space-y-6 mb-16">
                <div className="font-handwritten text-xl text-yellow-500 rotate-[-1deg] font-semibold">
                    {tag}
                </div>
                <div className="relative inline-block">
                    <h2 className="text-4xl md:text-5xl font-bold font-handwritten text-[#FFD60A] rotate-[-1deg]">
                        {title}
                        <div className="absolute -right-12 top-0 text-amber-500 rotate-12 text-3xl">
                            ✨
                        </div>
                        <div className="absolute -left-8 bottom-0 text-blue-500 -rotate-12 text-3xl">
                            ⭐️
                        </div>
                    </h2>
                    <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[200px] h-3 bg-blue-500/20 
                        rotate-[-1deg] rounded-full blur-sm"
                    />
                </div>
                <p className="font-handwritten text-xl text-[#9a9488] rotate-[-1deg]">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group h-full",
                            "transition-all duration-300",
                            index === 0 && "rotate-[-1deg]",
                            index === 1 && "rotate-[1deg]",
                            index === 2 && "rotate-[-2deg]"
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 bg-[#ffffff]",
                                "border-2 border-[#2a2820]",
                                "rounded-xl shadow-[4px_4px_0px_0px] shadow-[#2a2820]",
                                "transition-all duration-300",
                                "group-hover:shadow-[8px_8px_0px_0px]",
                                "group-hover:translate-x-[-4px]",
                                "group-hover:translate-y-[-4px]"
                            )}
                        />

                        <div className="relative p-6 flex flex-col h-full">
                            {tier.popular && (
                                <div
                                    className="absolute -top-4 -right-4 bg-amber-400 text-zinc-900 
                                    font-handwritten font-bold px-4 py-1.5 rounded-full rotate-12 text-sm border-2 border-zinc-900 shadow-[2px_2px_0px_0px] shadow-zinc-900"
                                >
                                    Popular!
                                </div>
                            )}

                            <div className="mb-6">
                                <div
                                    className={cn(
                                        "w-14 h-14 rounded-full mb-5",
                                        "flex items-center justify-center",
                                        "border-2 border-[#2a2820] bg-[#ffffff]",
                                        `text-${tier.color}-500`
                                    )}
                                >
                                    {tier.icon}
                                </div>
                                <h3 className="font-handwritten text-2xl font-bold text-[#000000]">
                                    {tier.name}
                                </h3>
                                <p className="font-handwritten text-[#000000] mt-2">
                                    {tier.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6 font-handwritten flex items-baseline">
                                <span className="text-4xl font-bold text-[#000000]">
                                    {typeof tier.price === 'number'
                                        ? `Rp ${tier.price.toLocaleString('id-ID')}`
                                        : tier.price}
                                </span>
                                {tier.suffix && (
                                    <span className="text-[#000000] ml-2 text-xl font-bold">
                                        {tier.suffix}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-start gap-3"
                                    >
                                        <div
                                            className="w-5 h-5 mt-1 rounded-full border-2 border-[#2a2820] bg-[#1a1914] 
                                            flex items-center justify-center shrink-0"
                                        >
                                            <Check className="w-3 h-3 text-[#f5c97a]" />
                                        </div>
                                        <span className="font-handwritten text-lg text-[#000000]">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={cn(
                                    "w-full h-12 font-handwritten text-lg relative font-bold",
                                    "border-2 border-[#2a2820]",
                                    "transition-all duration-300",
                                    "shadow-[4px_4px_0px_0px] shadow-[#2a2820]",
                                    "hover:shadow-[6px_6px_0px_0px]",
                                    "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                    tier.popular
                                        ? [
                                            "bg-amber-400 text-zinc-900 border-zinc-900 shadow-zinc-900",
                                            "hover:bg-amber-300",
                                            "active:bg-amber-500",
                                        ]
                                        : [
                                            "bg-[#1e1c12]",
                                            "text-[#f5f0e8]",
                                            "hover:bg-[#2a2820]",
                                            "active:bg-[#151310]",
                                        ]
                                )}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-40 left-10 text-6xl rotate-12">
                    ✎
                </div>
                <div className="absolute bottom-40 right-10 text-6xl -rotate-12">
                    ✏️
                </div>
            </div>
        </div>
    );
}

export { CreativePricing, type PricingTier }
