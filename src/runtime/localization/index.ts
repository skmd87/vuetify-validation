//import all files in this folder
import en from './en.json';
import de from './de.json';
import es from './es.json';
import fr from './fr.json';
import it from './it.json';
import ja from './ja.json';
import ar from './ar.json';
import pt from './pt.json';
import ru from './ru.json';
import ch from './ch.json';
import hi from './hi.json';

export type Locale = Record<string, Record<string, string>>;

export default {
   en,
   de,
   es,
   fr,
   it,
   ja,
   ar,
   pt,
   ru,
   ch,
   hi
} as Locale
