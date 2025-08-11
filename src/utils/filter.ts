export interface UrlQueryParams {
	key: string;
	value: string;
	searchParams: string;
	pathName: string;
}

export function formUrlQuery({
	key,
	value,
	searchParams,
	pathName,
}: UrlQueryParams): string {
	const params = new URLSearchParams(searchParams);
	params.set(key, value);
	return `${pathName}?${params.toString()}`;
}
