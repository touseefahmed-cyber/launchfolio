 
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import CONSTANTS from "@/constant";

function Sidebar() {
    return (
        <div className="md:p-[32px] p-[24px] h-full flex flex-col justify-between overflow-auto">
            <div>
                <div className="sm:mb-[24px] mb-[20px]">
                    <h2 className="md:text-[32px] md:leading-[32px] text-[26px] leading-[26px] text-black font-medium mb-[8px]">Request a quote</h2>
                    <p className="text-[14px] text-[#828282] leading-[14px] font-medium">Fill out the form below or <Link href="" className="text-black">book a call.</Link></p>
                </div>
                <div className="flex gap-[10px] sm:mb-[32px] mb-[24px]">
                    <figure className="w-[38px] h-[38px] rounded-full overflow-hidden shrink-0">
                        <Image src={CONSTANTS.profile} alt={CONSTANTS.profile_alt} width={38} height={38} />
                    </figure>
                    <div className=" font-semibold">
                        <h6 className="text-black mb-[3px] text-[14px] leading-[14px]">{CONSTANTS.siteName}</h6>
                        <Link href="" className="text-[12px] leading-[12px] text-black">{CONSTANTS.email}</Link>
                    </div>
                </div>
                <form>
                    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-[12px] w-full">
                        <li>
                            <Label htmlFor="Name" className="text-[12px] leading-[12px] font-semibold mb-[6px] inline-block">Name</Label>
                            <Input placeholder='Name' className="bg-white text-[16px] leading-[16px] font-medium text-black"/>
                        </li>
                        <li>
                            <Label htmlFor="Name" className="text-[12px] leading-[12px] font-semibold mb-[6px] inline-block">Email</Label>
                            <Input placeholder='Email' className="bg-white text-[16px] leading-[16px] font-medium text-black"/>
                        </li>
                        <li className="col-span-full">
                            <Label htmlFor="Name" className="text-[12px] leading-[12px] font-semibold mb-[6px] inline-block">Send a message or describe your project</Label>
                            <Textarea className="bg-white text-[16px] leading-[16px] font-medium text-black md:h-[200px] h-[150px]"/>
                        </li>
                        <li className="col-span-full">
                            <Label className="text-[12px] leading-[12px] font-semibold mb-[6px] inline-block">What's your budget?</Label>
                            <div className="grid grid-cols-2 gap-[12px]">
                                <div>
                                    <Label htmlFor="budget-min" className="text-[11px] text-[#828282] font-medium mb-[4px] inline-block">Min ($)</Label>
                                    <Input id="budget-min" type="number" placeholder="e.g. 1000" min={0} step={100} className="bg-white text-[16px] leading-[16px] font-medium text-black" />
                                </div>
                                <div>
                                    <Label htmlFor="budget-max" className="text-[11px] text-[#828282] font-medium mb-[4px] inline-block">Max ($)</Label>
                                    <Input id="budget-max" type="number" placeholder="e.g. 5000" min={0} step={100} className="bg-white text-[16px] leading-[16px] font-medium text-black" />
                                </div>
                            </div>
                        </li>
                    </ul>
                    <Button className="mt-[16px] bg-color rounded-full w-full cursor-pointer font-semibold h-[44px]">Send Message</Button>
                </form>
            </div>
            <div className="text-[12px] leading-[12px] font-semibold text-[#828282] mt-[10px]">By submitting this form, you agree to the <Link href="" className="text-black">Privacy Policy.</Link></div>
        </div>
    );
}

export default Sidebar;
