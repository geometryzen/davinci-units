import LocalizableMessage from './LocalizableMessage';
import mustBeString from '../checks/mustBeString';

export default function readOnly(name: string): LocalizableMessage {
    mustBeString('name', name);
    let message: LocalizableMessage = {
        get message(): string {
            return "Property `" + name + "` is readonly."
        }
    }
    return message
}
