import { CustomButton, CustomText, CustomCheckbox } from '@/components';
import { Colors, labelColors } from '@/constants';
import { Status, Todo } from '@/types';
import { useState } from 'react';
import {
  View,
  StyleSheet,
  Vibration,
  TouchableWithoutFeedback,
} from 'react-native';
import DeleteTodoModal from '../Modals/DeleteTodoModal';
import { getFullFormattedDate } from '@/helpers/date';

type TodoItemProps = Todo & {
  onDelete: (id: Todo['id']) => void;
  onCancel: (id: Todo['id']) => void;
  onCheck: (id: Todo['id']) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  date,
  title,
  description,
  location,
  status,
  onDelete,
  onCancel,
  onCheck,
}) => {
  const [isFull, setIsFull] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const isInfo = !!location || !!description;

  const onPressCheck = () => {
    onCheck(id);
  };

  const onPressCancel = () => {
    onCancel(id);
  };

  const onPressDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const onConfirmDelete = () => {
    onDelete(id);
    Vibration.vibrate(50);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setIsFull((prev) => !prev)}>
        <View style={styles.container}>
          <View
            style={[
              styles.checkTitleContainer,
              status === Status.CANCELLED && styles.disabled,
            ]}
          >
            <CustomCheckbox
              checked={status === Status.COMPLETED}
              disabled={status === Status.CANCELLED}
              onCheck={onPressCheck}
            />
            <View>
              <CustomText
                style={[
                  {
                    textDecorationLine:
                      status === Status.COMPLETED ? 'line-through' : 'none',
                  },
                  styles.title,
                ]}
                variant="title"
              >
                {title}
              </CustomText>
              <View style={styles.controlsContainer}>
                <CustomText variant="subTitle">{getFullFormattedDate(new Date(date))}</CustomText>
              </View>
            </View>
          </View>
          <View style={styles.controlsContainer}>
            <CustomText
              variant="label"
              style={{ backgroundColor: labelColors[status] }}
            >
              {status}
            </CustomText>
            <CustomButton
              icon={status === Status.CANCELLED ? 'refresh' : 'close'}
              size="small"
              disabled={status === Status.COMPLETED}
              onPress={onPressCancel}
            />
            <CustomButton
              icon="trash"
              size="small"
              variant="delete"
              onPress={onPressDelete}
            />
            <DeleteTodoModal
              isOpen={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
              onDelete={onConfirmDelete}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isFull && isInfo && (
        <View style={status === Status.CANCELLED && styles.disabled}>
          <CustomText variant="info">{location}</CustomText>
          <CustomText variant="info">{description}</CustomText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: Colors.SECONDARY_BACKGROUND,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
  headerMain: {
    marginBottom: 24,
    alignItems: 'center',
    gap: 8,
  },
  checkTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    color: Colors.ITEM_TITLE,
  },
  disabled: {
    opacity: 0.5,
  },
});
