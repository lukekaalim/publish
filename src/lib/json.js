export const loadJsonResource = (config) => (
    (process.env.NODE_ENV === 'production' ?
        fetch(`./${config}.json`).then(response => response.json())
        :
        import(`../json/${config}`).then(module => module.default || module)
    )
);
