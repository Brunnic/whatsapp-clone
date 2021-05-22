import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function login() {
	const signIn = () => {
		auth.signInWithPopup(provider).catch(alert);
	};

	return (
		<Container>
			<Head>
				<title>Log In</title>
			</Head>

			<LoginContainer>
				<Title>Log in with Google</Title>
				<Button variant='outlined' onClick={signIn}>
					Sign in with Google
				</Button>
			</LoginContainer>
		</Container>
	);
}

export default login;

const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: whitesmoke;
`;

const Title = styled.h3`
	margin-bottom: 50px;
`;

const LoginContainer = styled.div`
	padding: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
