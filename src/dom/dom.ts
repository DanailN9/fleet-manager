type DomContent = string | Node;

type elementfactory<T extends HTMLElement> = (props?: object, ...content: DomContent[]) => T

export function dom(type: string, props?: object, ...content: DomContent[]) {
    const element = document.createElement(type);

    if (props) {
        for (const propName in props) {
            if (propName.startsWith('on')) {
                const eventName = propName.slice(2).toLowerCase();
                element.addEventListener(eventName, props[propName])
            }
            // } else if (propName.startsWith('data')) {
            //     const dataName = propName.slice(4,5).toLowerCase() + propName.slice(5);
            //     dataName.dataset[dataName]
            // }
            else {
                element[propName] = props[propName]
            }
        }
    }

    for (const item of content) {
        element.append(item)
    }

    return element
    
}

export const table: elementfactory<HTMLTableElement> = dom.bind(null,'table');
export const thead: elementfactory<HTMLTableSectionElement> = dom.bind(null, 'thead');
export const tbody: elementfactory<HTMLTableSectionElement> = dom.bind(null, 'tbody');
export const tr:elementfactory<HTMLTableRowElement>= dom.bind(null, 'tr');
export const td:elementfactory<HTMLTableCellElement>= dom.bind(null,'td');
export const th:elementfactory<HTMLTableCellElement>= dom.bind(null, 'th');
export const button:elementfactory<HTMLButtonElement>= dom.bind(null, 'button');