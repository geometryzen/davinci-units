import LocalizableMessage from './LocalizableMessage';
import mustBeString from '../checks/mustBeString';

export default function(name: string): LocalizableMessage {
    mustBeString('name', name);
    let message: LocalizableMessage = {
        get message(): string {
            return "Method `" + name + "` is not supported."
        }
    }
    return message
}
