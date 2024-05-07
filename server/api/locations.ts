import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";
import { type Location } from "~/utils/types";

export function readFile<T>(fileName: string) {
  const config = useRuntimeConfig()
  const filePath = path.join(process.cwd(), config.private.rootDir, `${fileName}.yml`)
  const fileContents = fs.readFileSync(filePath, "utf8");
  return yaml.parse(fileContents) as T[]
}

const locations = readFile<Location>('locations')

export default defineEventHandler<Location[]>(() => {
  try {
    return locations
  } catch (error: any) {
    console.error("API locations GET", error)

    throw createError({ statusCode: 500, statusMessage: "Some Unknown Error Found" })
  }

})
