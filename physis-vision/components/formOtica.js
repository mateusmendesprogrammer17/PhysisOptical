import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Form = () => {
  const [distancia_focal, setDistancia_Focal] = useState('');
  const [distancia_objeto, setDistancia_Objeto] = useState('');
  const [espelho_esferico, setEspelho_Esferico] = useState('Côncavo');
  const [lente, setLente] = useState('Convergente');
  
  // Estados de ampliação e tamanho para espelho
  const [ampliacaoEspelho, setAmpliacaoEspelho] = useState('');
  const [tamanhoEspelho, setTamanhoEspelho] = useState('');
  const [horizontalOrientationEspelho, setHorizontalOrientationEspelho] = useState('');
  const [verticalOrientationEspelho, setVerticalOrientationEspelho] = useState('');

  // Estados de ampliação e tamanho para lente
  const [ampliacaoLente, setAmpliacaoLente] = useState('');
  const [tamanhoLente, setTamanhoLente] = useState('');
  const [horizontalOrientationLente, setHorizontalOrientationLente] = useState('');
  const [verticalOrientationLente, setVerticalOrientationLente] = useState('');

  const [calculando, setCalculando] = useState(false);

  // Função de cálculo de Gauss para espelhos ou lentes
  const gaussMath = (f, doValue) => {
    const di = 1 / ((1 / f) - (1 / doValue)); // Calculando a distância da imagem (di)
    return di;
  };






  const chooseLentes = (lente, distancia_focal, distancia_objeto) => {
    // Resetando os estados antes de fazer novos cálculos
    setAmpliacaoLente('');
    setTamanhoLente('');
    setHorizontalOrientationLente('');
    setVerticalOrientationLente('');
    const f = Number(distancia_focal);
    const p = Number(distancia_objeto);
  
    // Verifica se a distância do objeto não é zero
    if (p === 0) {
      console.error("A distância do objeto não pode ser zero.");
      return;
    }  
    // Calcula a distância da imagem (di) usando a fórmula de Gauss
    let q = 1 / ((1 / f) - (1 / p));
    let tipoImagem = "";
    let orientacaoVertical = "";
    let ampliacao = -q / p;
  
    // Lógica para lentes convergentes e divergentes
    if (lente === 'Convergente') {
      if (p > f) {
        tipoImagem = "Imagem real";
        orientacaoVertical = ampliacao > 0 ? "Direita" : "Invertida";
      } else if (p < f) {
        tipoImagem = "Imagem virtual";
        orientacaoVertical = "Direita";
      }
  
      // Determina o tamanho da imagem
      if (ampliacao > 1) {
        setTamanhoLente('Maior');
        console.log(`${tamanhoLente}`)
      } else if (ampliacao === 1) {
        setTamanhoLente('Mesmo tamanho');
        console.log(`${tamanhoLente}`)
      } else {
        setTamanhoLente('Menor');
        console.log(`${tamanhoLente}`)
      }
  
    } else if (lente === 'Divergente') {
      // Lentes divergentes sempre geram imagens virtuais e menores
      q = Math.abs(q); // Tornando a distância da imagem positiva
      tipoImagem = "Imagem virtual";
      orientacaoVertical = "Direita";
      setTamanhoLente('Menor');
    } 
    // Atualiza o estado de ampliação
    setAmpliacaoLente(ampliacao.toFixed(2));

    // Retorna os valores calculados
    return { q, tipoImagem, orientacaoVertical, ampliacao };
  };
  

  const switch_espelhos = useCallback(() => {
    setAmpliacaoEspelho(''); 
    setTamanhoEspelho('');
    setHorizontalOrientationEspelho('');
    setVerticalOrientationEspelho('');

    let imagem_aumentado = 0;
    let f = Number(distancia_focal);
    const doValue = Number(distancia_objeto);
    let dimage = 0;

    if (espelho_esferico === 'Côncavo') {
      if (f > 0) {
        dimage = gaussMath(f, doValue);
        imagem_aumentado = dimage / doValue;
        setHorizontalOrientationEspelho(dimage > 0 ? 'Imagem Real' : 'Imagem Virtual');
      } else {
        f = Math.abs(f);
        dimage = gaussMath(f, doValue);
        imagem_aumentado = dimage / doValue;
        setHorizontalOrientationEspelho(dimage > 0 ? 'Imagem Real' : 'Imagem Virtual');
      }

      setVerticalOrientationEspelho(imagem_aumentado > 0 ? 'Direita' : 'Invertida');

      if (imagem_aumentado > 1) {
        setTamanhoEspelho('Maior');

        console.log(` ${tamanhoEspelho}`)
      } else if (imagem_aumentado === 1) {
        setTamanhoEspelho('Mesmo tamanho');
        console.log(` ${tamanhoEspelho}`)
      } else {

        setTamanhoEspelho('Menor');

        console.log(` ${tamanhoEspelho}`)
      }

      setAmpliacaoEspelho(imagem_aumentado.toFixed(2));
    } else if (espelho_esferico === 'Convexo') {
      f = -Math.abs(f);
      dimage = gaussMath(f, doValue);
      imagem_aumentado = dimage / doValue;
      setHorizontalOrientationEspelho('Imagem Virtual');
      setVerticalOrientationEspelho('Direita');
      setAmpliacaoEspelho(imagem_aumentado.toFixed(2));
    }
  }, [distancia_focal, distancia_objeto, espelho_esferico]);

  const limparCampos = () => {
    setDistancia_Focal('');
    setDistancia_Objeto('');
  };

  const handleCalcular = () => {
    setCalculando(true);
    switch_espelhos(); // Realiza o cálculo do espelho
    const { q, tipoImagem, orientacaoVertical, ampliacao } = chooseLentes(lente, distancia_focal, distancia_objeto);
    setTamanhoLente(tipoImagem);
    setHorizontalOrientationLente(orientacaoVertical);
    limparCampos();
    setCalculando(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ maxWidth: '100%' }}>
        <Text style={styles.help}>Selecione o tipo de espelho ou lente:</Text>
        <Picker
          selectedValue={espelho_esferico}
          style={styles.picker}
          onValueChange={(itemValue) => setEspelho_Esferico(itemValue)}
        >
          <Picker.Item label="Côncavo" value="Côncavo" />
          <Picker.Item label="Convexo" value="Convexo" />
        </Picker>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={distancia_focal}
          placeholder="Distância Focal (f)"
          onChangeText={(text) => setDistancia_Focal(text)}
        />

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={distancia_objeto}
          placeholder="Distância do Objeto (do)"
          onChangeText={(text) => setDistancia_Objeto(text)}
        />

        <Picker
          selectedValue={lente}
          style={styles.picker}
          onValueChange={(itemValue) => setLente(itemValue)}
        >
          <Picker.Item label="Divergente" value="Divergente" />
          <Picker.Item label="Convergente" value="Convergente" />
        </Picker>

        <TouchableOpacity style={styles.btn_calcular} onPress={handleCalcular}>
          <Text style={{ color: '#ffffff', textAlign: 'center', margin: 10, fontWeight: 'bold' }}>
            Calcular
          </Text>
        </TouchableOpacity>

        {/* Exibe os resultados de espelho */}
        {ampliacaoEspelho !== '' && (
          <Text style={styles.result}>Ampliação (Espelho): {ampliacaoEspelho} cm</Text>
        )}

        {horizontalOrientationEspelho !== '' && (
          <Text style={styles.result}>{horizontalOrientationEspelho}</Text>
        )}

        {verticalOrientationEspelho !== '' && (
          <Text style={styles.result}>{verticalOrientationEspelho}</Text>
        )}

        {tamanhoEspelho !== '' && (
          <Text style={styles.result}>{tamanhoEspelho}</Text>
        )}

        {/* Exibe os resultados de lente */}
        <Text style={[styles.result, { textAlign: 'center', color: '#ffffff', fontWeight: 'bold' }]}>
          Lente escolhida: {lente}
        </Text>

        {ampliacaoLente !== '' && (
          <Text style={styles.result}>Ampliação (Lente): {ampliacaoLente} cm</Text>
        )}

        {horizontalOrientationLente !== '' && (
          <Text style={styles.result}>{horizontalOrientationLente}</Text>
        )}

        {verticalOrientationLente !== '' && (
          <Text style={styles.result}>{verticalOrientationLente}</Text>
        )}

        {tamanhoLente!='' ?  (
          <Text style={styles.result}>{tamanhoLente}</Text>
        ):''}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    margin: 15,
    marginVertical: 10,
  },
  help: {
    fontSize: 18,
    marginBottom: 8,
  },
  picker: {
    height: 58,
    width: '100%',
    fontSize: 12,
    marginVertical: 8,
    color: 'white',
    backgroundColor: '#5e0fa4',
    borderRadius: 20,
    overflow: 'hidden',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#7f1ed3',
    borderWidth: 2,
    marginVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  result: {
    height: 50,
    textAlign: 'center',
    color: 'white',
    width: '100%',
    fontSize: 18,
    marginTop: 20,
    backgroundColor: '#7f1ed3',
    borderRadius: 10,
    paddingVertical: 10,
  },
  btn_calcular: {
    marginTop: 10,
    backgroundColor: '#5e0fa4',
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default Form;
