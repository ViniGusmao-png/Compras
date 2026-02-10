import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ff9853",
    paddingTop: 62,

  },
  logo: {
    height: 34,
    width: 134
  },
  form: {
    width: '100%',
    paddingHorizontal: 24,
    gap: 8,
    marginTop: 32

  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingTop: 32,
    marginTop: 24

  },

  clearButton: {
    marginLeft: 'auto',
  },

  clearButtonText: {
    fontSize: 12,
    color: '#8b8b8b5a',
    fontWeight: '600'
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e86304',
    paddingBottom: 8,
  }
})