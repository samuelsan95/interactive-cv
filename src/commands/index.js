import { helpCommand }       from './help.js'
import { aboutCommand }      from './about.js'
import { experienceCommand } from './experience.js'
import { skillsCommand }     from './skills.js'
import { educationCommand }  from './education.js'
import { themeCommand }      from './theme.js'
import { langCommand }       from './lang.js'

export const commands = {
  help:       helpCommand,
  about:      aboutCommand,
  whoami:     aboutCommand,    // alias
  experience: experienceCommand,
  exp:        experienceCommand, // alias
  skills:     skillsCommand,
  education:  educationCommand,
  edu:        educationCommand,  // alias
  theme:      themeCommand,
  lang:       langCommand,
}
