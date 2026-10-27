import { Platform } from "@/app/config";
import { TEMPLATE_PLATFORMS } from "@/app/templates";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page (props: PageProps<'/dashboard/[platform]'>) {
    return <Suspense fallback={<p>Loading...</p>}>
        <PlatformView params={props.params} />
    </Suspense>
}
async function PlatformView({ params }: { params: Promise<{ platform: string}> }) {
    const { platform: slug } = await params;
    console.log(slug);
    const platform = TEMPLATE_PLATFORMS.find((p) => p.id.toLowerCase() === decodeURIComponent(slug));
    console.log("Platform: ", platform)
    if (!platform) notFound();

    return <h1>{platform?.name}</h1>
    
}
