import "@drop-in/graffiti";
import { UserCard } from "./test";

export default {
	GET() {
		const now = new Date();

		return (
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<title>UserCard</title>
				</head>
				<body>
					<div style={{ padding: "1rem" }}>
						<UserCard
							name="Ada Lovelace"
							description="Pioneer of computing."
							date={now}
							about="First computer programmer."
						/>
					</div>
				</body>
			</html>
		);
	},
};
