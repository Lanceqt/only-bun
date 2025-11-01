import "@drop-in/graffiti";

type UserCardProps = {
	name: string;
	description: string;
	date: Date;
	about: string;
};

export function UserCard({ name, description, date, about }: UserCardProps) {
	return (
		<div class="box-1">
			<h1 safe>{name}</h1>
			<br />
			<p safe>{description}</p>
			<br />
			<time datetime={date.toISOString()}>{date.toDateString()}</time>
			<br />
			<p safe>{about}</p>
		</div>
	);
}
