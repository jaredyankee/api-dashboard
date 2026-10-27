import { ForwardRefExoticComponent, SVGProps } from "react"

export enum ModuleType {
    "list",
    "function"
}
export enum METHOD {
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS"
}

export type RequestMeta = {
    endpoint: string,
    method: METHOD,

}
export type Platform = {
    id: string,
    name: string,
    description: string | null,
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGElement>, "ref">> | null,
    href: string
}

