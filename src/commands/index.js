import { helpCommand }       from './help.js'
import { contactCommand }    from './contact.js'
import { sudoCommand, lsCommand, helloCommand, fortuneCommand } from './easter.js'
import { aboutCommand }      from './about.js'
import { experienceCommand } from './experience.js'
import { skillsCommand }     from './skills.js'
import { educationCommand }  from './education.js'
import { themeCommand }      from './theme.js'
import { langCommand }       from './lang.js'

export const commands = {
  help:       helpCommand,
  about:      aboutCommand,
  whoami:     aboutCommand,
  experience: experienceCommand,
  exp:        experienceCommand,
  skills:     skillsCommand,
  education:  educationCommand,
  edu:        educationCommand,
  theme:      themeCommand,
  lang:       langCommand,
  contact:    contactCommand,
  // Easter eggs — not listed in help
  sudo:       sudoCommand,
  ls:         lsCommand,
  hello:      helloCommand,
  hi:         helloCommand,
  fortune:    fortuneCommand,
}
