import { CustomButton, CustomModal, CustomText } from '@/components';
import { StyleSheet, View } from 'react-native';

type DeleteTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteTodoModal: React.FC<DeleteTodoModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContentContainer}>
        <CustomText variant="heading">Delete todo</CustomText>
        <CustomText variant="subTitle">
          Are you sure you want to delete this todo?
        </CustomText>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton label="Cancel" onPress={onClose} variant="secondary" />
        <CustomButton label="Delete" onPress={onDelete} />
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  modalContentContainer: {
    gap: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
    marginTop: 20,
  },
});

export default DeleteTodoModal;
