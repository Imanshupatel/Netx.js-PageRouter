"use client";
import { useState } from "react";
import { Mail, Phone, Gamepad2, Users } from "lucide-react";

export default function PlayerCard() {


    return (
        <div className="max-w-sm mx-auto mt-25 p-5 rounded-2xl bg-neutral-900 text-white shadow-lg border border-neutral-800">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Imanshu</h2>
                <span className="text-xs text-gray-400">
                    8/8/2025, 1:37:51 pm
                </span>
            </div>

            <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" /> imanshupatel@gmail.com
                </p>
                <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-400" /> 7524139832
                </p>
                <p className="flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4 text-yellow-400" /> Game: Bgmi
                </p>
                <p className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-pink-400" /> Team: MADX
                </p>
            </div>


        </div>
    );
}
