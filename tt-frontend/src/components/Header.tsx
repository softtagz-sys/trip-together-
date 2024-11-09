import { MapPin } from "lucide-react";

export function Header() {
    return (
        <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <MapPin className="h-8 w-8 text-primary"/>
                    <span className="text-2xl font-bold text-primary">Trip Together</span>
                </div>
            </div>
        </header>
    );
}