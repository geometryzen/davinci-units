import LocalizableMessage from './LocalizableMessage';
import mustBeString from '../checks/mustBeString';

export default function(name: string): LocalizableMessage {
    mustBeString('name', name);
    const message: LocalizableMessage = {
        get message(): string {
            return `'${name}' method is not yet implemented.`
        }
    }
    return message
}
