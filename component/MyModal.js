import { Modal, StyleSheet, TextInput, View } from "react-native";
import React, { useState, useRef } from "react";
import Button from "./Button";

export default function MyModal({
	inputRef,
	editGoal,
	modalVisible,
	toggleModal,
	handleEdit,
	index,
	stylesButtonAdd,
	setNewGoal,
}) {
	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={modalVisible}
			onRequestClose={toggleModal}
		>
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<TextInput
					style={styles.input}
					ref={inputRef}
					placeholder={editGoal}
					onChangeText={(newText) => setNewGoal(newText)}
				/>

				<Button handlePress={toggleModal} stylesButton={stylesButtonAdd}>
					Annuler
				</Button>

				<Button
					handlePress={handleEdit}
					argumentFunction={index}
					stylesButton={stylesButtonAdd}
				>
					Modifier
				</Button>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
		backgroundColor: "white",
	},
});
