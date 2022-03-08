/**
 * ***Syntax for creating the 10 values***
 * rename var
 *   (ipcrtiv=v1)
 * (imprich=v2)
 * (ipeqopt=v3)
 * (ipshabt=v4)
 * (impsafe=v5)
 * (impdiff=v6)
 * (ipfrule=v7)
 * (ipudrst=v8)
 * (ipmodst=v9)
 * (ipgdtim=v10)
 * (impfree=v11)
 * (iphlppl=v12)
 * (ipsuces=v13)
 * (ipstrgv=v14)
 * (ipadvnt=v15)
 * (ipbhprp=v16)
 * (iprspot=v17)
 * (iplylfr=v18)
 * (impenv=v19)
 * (imptrad=v20)
 * (impfun=v21).
 *   missing values v1 to v21 (7,8,9).
 *   COMPUTE mrat = MEAN(v1 to v21) .
 * EXECUTE .
 *   COMPUTE SEcenter = MEAN(v5, v14) - mrat .
 *   EXECUTE .
 *   COMPUTE COcenter = MEAN(v7, v16) - mrat .
 *   EXECUTE .
 *   COMPUTE TRcenter = MEAN(v9, v20) - mrat .
 *   EXECUTE .
 *   COMPUTE BEcenter = MEAN(v12, v18) - mrat.
 *   EXECUTE .
 *   COMPUTE UNcenter = MEAN(v3, v8, v19) - mrat .
 *   EXECUTE .
 *   COMPUTE SDcenter = MEAN(v1, v11) - mrat .
 *   EXECUTE .
 *   COMPUTE STcenter = MEAN(v6, v15) - mrat .
 *   EXECUTE .
 *   COMPUTE HEcenter = MEAN(v10, v21) - mrat.
 *   EXECUTE .
 *   COMPUTE ACcenter = MEAN(v4, v13) - mrat .
 *   EXECUTE .
 *   COMPUTE POcenter = MEAN(v2, v17) - mrat .
 *   EXECUTE .
 */

import { Gender } from "~/root";

// prettier-ignore
export const questions = (gender: Gender | null) => gender ? QUESTIONS_EN[gender] : [];

// prettier-ignore
const QUESTIONS_EN = {
  // prettier-ignore
    M: [
        {id: 'ipcrtiv', cat:'self_direction', title: `Thinking up new ideas and being creative is important to him. He likes to do things in his own original way.`},
        {id: 'imprich', cat:'power',title: `It is important to him to be rich. He wants to have a lot of money and expensive things.`},
        {id: 'ipeqopt', cat:'universalism',title: `He thinks it is important that every person in the world should be treated equally. He believes everyone should have equal opportunities in life.`},
        {id: 'ipshabt', cat:'achievement',title: `It's important to him to show his abilities. He wants people to admire what he does.`},
        {id: 'impsafe', cat:'security',title: `It's important to him to live in secure surroundings. He avoids anything that might endanger his safety.`},
        {id: 'impdiff', cat:'stimulation',title: `He likes surprises and is always looking for new things to do. He thinks it is important to do lots of different things in life.`},
        {id: 'ipfrule', cat:'conformity',title: `He believes that people should do what they're told. He thinks people should follow rules at all times, even when no-one is watching.`},
        {id: 'ipudrst', cat:'universalism',title: `It's important to him to listen to people who are different from him. Even when he disagrees with them, he still wants to understand them.`},
        {id: 'ipmodst', cat:'tradition',title: `It is important to him to be humble and modest. He tries not to draw attention to himself.`},
        {id: 'ipgdtim', cat:'hedonism',title: `Having a good time is important to him. He likes to 'spoil' himself.`},
        {id: 'impfree', cat:'self_direction',title: `It is important to him to make his own decisions about what he does. He likes to be free and not depend on others.`},
        {id: 'iphlppl', cat:'benevolence',title: `It's important to him to help the people around him. He wants to care for their well-being.`},
        {id: 'ipsuces', cat:'achievement',title: `Being very successful is important to him. He hopes people will recognise his achievements.`},
        {id: 'ipstrgv', cat:'security',title: `It is important to him that the government ensures his safety against all threats. He wants the state to be strong so it can defend its citizens.`},
        {id: 'ipadvnt', cat:'stimulation',title: `He looks for adventures and like to take risks. He wants to have an exciting life.`},
        {id: 'ipbhprp', cat:'conformity',title: `It is important to him always to behave properly. He wants to avoid doing anything people would say is wrong.`},
        {id: 'iprspot', cat:'power',title: `It is important to him to get respect from others. He wants people to do what he says.`},
        {id: 'iplylfr', cat:'benevolence',title: `It is important to him to be loyal to his friends. He wants to devote himself to people close to him.`},
        {id: 'impenv',  cat:'universalism',title: `He strongly believes that people should care for nature. Looking after the environment is important to him.`},
        {id: 'imptrad', cat:'tradition',title: `Tradition is important to him. He tries to follow the customs handed down by his religion or his family.`},
        {id: 'impfun',  cat:'hedonism',title: `He seeks every chance he can to have fun. It is important to him to do things that give him pleasure.`},
    ],
  // prettier-ignore
    F: [
        {id: 'ipcrtiv', cat:'self_direction', title: `Thinking up new ideas and being creative is important to her. She likes to do things in her own original way.`},
        {id: 'imprich', cat:'power',title: `It is important to her to be rich. She wants to have a lot of money and expensive things.`},
        {id: 'ipeqopt', cat:'universalism',title: `She thinks it is important that every person in the world should be treated equally. She believes everyone should have equal opportunities in life.`},
        {id: 'ipshabt', cat:'achievement',title: `It's important to her to show her abilities. She wants people to admire what she does.`},
        {id: 'impsafe', cat:'security',title: `It's important to her to live in secure surroundings. She avoids anything that might endanger her safety.`},
        {id: 'impdiff', cat:'stimulation',title: `She likes surprises and is always looking for new things to do. She thinks it is important to do lots of different things in life.`},
        {id: 'ipfrule', cat:'conformity',title: `She believes that people should do what they're told. She thinks people should follow rules at all times, even when no-one is watching.`},
        {id: 'ipudrst', cat:'universalism',title: `It's important to her to listen to people who are different from her. Even when she disagrees with them, she still wants to understand them.`},
        {id: 'ipmodst', cat:'tradition',title: `It is important to her to be humble and modest. She tries not to draw attention to herself.`},
        {id: 'ipgdtim', cat:'hedonism',title: `Having a good time is important to her. She likes to 'spoil' herself.`},
        {id: 'impfree', cat:'self_direction',title: `It is important to her to make her own decisions about what she does. She likes to be free and not depend on others.`},
        {id: 'iphlppl', cat:'benevolence',title: `It's important to her to help the people around her. She wants to care for their well-being.`},
        {id: 'ipsuces', cat:'achievement',title: `Being very successful is important to her. She hopes people will recognise her achievements.`},
        {id: 'ipstrgv', cat:'security',title: `It is important to her that the government ensures her safety against all threats. She wants the state to be strong so it can defend its citizens.`},
        {id: 'ipadvnt', cat:'stimulation',title: `She looks for adventures and like to take risks. She wants to have an exciting life.`},
        {id: 'ipbhprp', cat:'conformity',title: `It is important to her always to behave properly. She wants to avoid doing anything people would say is wrong.`},
        {id: 'iprspot', cat:'power',title: `It is important to her to get respect from others. She wants people to do what she says.`},
        {id: 'iplylfr', cat:'benevolence',title: `It is important to her to be loyal to her friends. She wants to devote herself to people close to her.`},
        {id: 'impenv',  cat:'universalism',title: `She strongly believes that people should care for nature. Looking after the environment is important to her.`},
        {id: 'imptrad', cat:'tradition',title: `Tradition is important to her. She tries to follow the customs handed down by her religion or her family.`},
        {id: 'impfun',  cat:'hedonism',title: `She seeks every chance she can to have fun. It is important to her to do things that give her pleasure.`},
    ],
  // prettier-ignore
    NB: [
        {id: 'ipcrtiv', cat:'self_direction', title: `Thinking up new ideas and being creative is important to them. They like to do things in their own original way.`},
        {id: 'imprich', cat:'power',title: `It is important to them to be rich. They want to have a lot of money and expensive things.`},
        {id: 'ipeqopt', cat:'universalism',title: `They think it is important that every person in the world should be treated equally. They believe everyone should have equal opportunities in life.`},
        {id: 'ipshabt', cat:'achievement',title: `It's important to them to show their abilities. They want people to admire what they do.`},
        {id: 'impsafe', cat:'security',title: `It's important to them to live in secure surroundings. They avoid anything that might endanger their safety.`},
        {id: 'impdiff', cat:'stimulation',title: `They like surprises and is always looking for new things to do. They think it is important to do lots of different things in life.`},
        {id: 'ipfrule', cat:'conformity',title: `They believe that people should do what they're told. They think people should follow rules at all times, even when no-one is watching.`},
        {id: 'ipudrst', cat:'universalism',title: `It's important to them to listen to people who are different from them. Even when they disagree with them, they still want to understand them.`},
        {id: 'ipmodst', cat:'tradition',title: `It is important to them to be humble and modest. They try not to draw attention to themselves.`},
        {id: 'ipgdtim', cat:'hedonism',title: `Having a good time is important to them. They like to 'spoil' themselves.`},
        {id: 'impfree', cat:'self_direction',title: `It is important to them to make their own decisions about what they do. They like to be free and not depend on others.`},
        {id: 'iphlppl', cat:'benevolence',title: `It's important to them to help the people around them. They want to care for their well-being.`},
        {id: 'ipsuces', cat:'achievement',title: `Being very successful is important to them. They hope people will recognise their achievements.`},
        {id: 'ipstrgv', cat:'security',title: `It is important to them that the government ensures their safety against all threats. They want the state to be strong so it can defend its citizens.`},
        {id: 'ipadvnt', cat:'stimulation',title: `They look for adventures and like to take risks. They want to have an exciting life.`},
        {id: 'ipbhprp', cat:'conformity',title: `It is important to them always to behave properly. They want to avoid doing anything people would say is wrong.`},
        {id: 'iprspot', cat:'power',title: `It is important to them to get respect from others. They want people to do what they say.`},
        {id: 'iplylfr', cat:'benevolence',title: `It is important to them to be loyal to their friends. They want to devote themselves to people close to them.`},
        {id: 'impenv',  cat:'universalism',title: `They strongly believe that people should care for nature. Looking after the environment is important to them.`},
        {id: 'imptrad', cat:'tradition',title: `Tradition is important to them. They trie to follow the customs handed down by their religion or their family.`},
        {id: 'impfun',  cat:'hedonism',title: `They seek every chance they can to have fun. It is important to them to do things that give them pleasure.`},
    ],
}
