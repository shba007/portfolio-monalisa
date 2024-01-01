import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";
import { createAvatar } from '@dicebear/core';
import { micah } from '@dicebear/collection';

interface Testimonial {
  image: string;
  name: string;
  message: string;
}

function generateAvatar(name: string, gender: 'male' | 'female') {
  const avatar = createAvatar(micah, {
    seed: name,
    baseColor: ["ac6651", "f9c9b6"],
    backgroundColor: ["b6e3f4", "c0aede", "d1d4f9"],
    mouth: ["laughing", "smile", "smirk"],
    scale: 70,
    translateY: 12,
    shirt: gender === 'female' ? ["open"] : ["collared", "crew"],
    hair: gender === 'female' ? ["dannyPhantom", "full", "pixie"] : ["fonze", "mrClean", "turban"],
    eyebrows: gender === 'female' ? ["eyelashesDown", "eyelashesUp"] : ["down", "up"],
    facialHairProbability: gender === 'female' ? 0 : 100,
    earringsProbability: gender === 'female' ? 100 : 0,
  });

  return avatar.toDataUri()
}

function shortenName(name: string) {
  const [firstName, lastName] = name.split(' ')
  return `${firstName[0]}. ${lastName}`
}

export default defineEventHandler<Promise<Testimonial[]>>(async () => {
  const config = useRuntimeConfig()

  try {
    const filePath = path.join(process.cwd(), config.private.rootDir, 'testimonials.yml')
    const fileContents = fs.readFileSync(filePath, "utf8");
    const testimonials: { name: string, gender: 'male' | 'female', message: string }[] = yaml.parse(fileContents);

    return await Promise.all(
      testimonials.map(async ({ name, gender, message }) => ({ image: await generateAvatar(name, gender), name: shortenName(name), message }))
    );
  } catch (error: any) {
    console.error("API testimonials GET", error)

    throw createError({ statusCode: 500, statusMessage: "Some Unknown Error Found" })
  }
})