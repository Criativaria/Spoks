import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { makeStyle } from './styles'; 

export function Footer() {
  const styles = makeStyle();
  
  // Estado para controlar a visibilidade do modal
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        Gostaria de apoiar o projeto?{' '}
      </Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.footerLink}>clique aqui</Text>
      </TouchableOpacity>

      {/* Modal de Doação */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Faça uma Doação</Text>
          <Text style={styles.modalMessage}>Sua doação ajuda a melhorar nossos serviços!</Text>
          <Image source={{ uri:'https://media.istockphoto.com/id/1347277582/vector/qr-code-sample-for-smartphone-scanning-on-white-background.jpg?s=612x612&w=0&k=20&c=6e6Xqb1Wne79bJsWpyyNuWfkrUgNhXR4_UYj3i_poc0='}}
           style={{ width: 200, height: 200, resizeMode: 'contain' }}
/>
          <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}>
        <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
        </View>
        </View>
      </Modal>
    </View>
  );
}
