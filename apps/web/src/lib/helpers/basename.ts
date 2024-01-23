export default (filepath: string, suffix?: string) => {
	let basename = filepath.split('/').at(-1);

	return basename ? (suffix ? basename.replace(suffix, '') : basename) : undefined;
};
